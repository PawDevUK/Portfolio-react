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

        ignoreElements: (element) => {
          return element.classList.contains('no-pdf');
        },
          const h5Elements = clonedDoc.querySelectorAll('.cv-h5');
          h5Elements.forEach((element) => {
            if (element.textContent.includes('Portfolio Frontend')) {
              element.classList.add('cv-h5-for-Donload');
            }
          });

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
