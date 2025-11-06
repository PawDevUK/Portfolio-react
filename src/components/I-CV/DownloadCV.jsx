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
  const downloadCV = () => {
    const cvElement = document.getElementById('cv');

    if (!cvElement) {
      console.error('CV element not found');
      return;
    }

    html2canvas(cvElement, {
      scale: 2,
      useCORS: true,
      logging: false,
      ignoreElements: (element) => {
        return element.classList.contains('no-pdf');
      },
    })
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgWidth = 210;
        const pageHeight = 297;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;
        let position = 0;

        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        // Add new pages if content is longer than one page
        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }

        pdf.save('Pawel_Siwek_CV.pdf');
      })
      .catch((error) => {
        console.error('Error generating PDF:', error);
      });
  };

  return (
    <Wrapper className='no-pdf'>
      <Button light onClick={downloadCV}>
        Download
      </Button>
    </Wrapper>
  );
}
