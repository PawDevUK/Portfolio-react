import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Button from '../common/Button';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

export default function DownloadCV() {
  const downloadCV = async () => {
    const cvElement = document.getElementById('cv');

    if (!cvElement) {
      console.error('CV element not found');
      return;
    }

    try {
      const canvas = await html2canvas(cvElement, {
        scale: 2.5,
        logging: false,
        ignoreElements: (element) => {
          return element.classList.contains('no-pdf');
        },
        onclone: (clonedDoc) => {
          // Add the download-specific class only to the "Portfolio Frontend" section
          const h5Elements = clonedDoc.querySelectorAll('.cv-h5');
          h5Elements.forEach((element) => {
            if (element.textContent.includes('Portfolio Frontend')) {
              element.classList.add('cv-h5-for-Donload');
            }
          });
        },
      });

      const imgData = canvas.toDataURL('image/jpeg', 0.95);
      const pdf = new jsPDF('p', 'mm', 'a4');

      const imgWidth = 210; // A4 width in mm
      const pageHeight = 297; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = 0;

      // Add first page
      pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      // Add subsequent pages with adjusted positioning to avoid cutting content
      while (heightLeft > 0) {
        position = -(imgHeight - heightLeft);
        pdf.addPage();
        pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('Pawel_Siwek_CV.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  return (
    <Wrapper className='no-pdf'>
      <Button light onClick={downloadCV}>
        Download
      </Button>
    </Wrapper>
  );
}
