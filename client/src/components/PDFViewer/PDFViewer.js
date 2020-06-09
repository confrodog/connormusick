import React, { Component } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

import './PDFViewer.css';
import resume from '../../assets/resume.pdf';

class PDFViewer extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  };
  componentDidMount() {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  }
  render() {
    const { pageNumber } = this.state;
    return (
      <div className='PDF-Div'>
        <Document
          className='Document'
          file={resume}
          onLoadError={console.error()}>
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
    );
  }
}

export default PDFViewer;
