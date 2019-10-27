import React, { Component } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';

import samplePDF from "../images/Franchise-POV.pdf"

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class LicenseTerms extends Component {

    render() {
        return (
            <div style={{display: "flex", justifyContent: "center"}}>
                <div>
                    <Document file={samplePDF}>
                        <Page size="A4" object-fit="fill" pageNumber={1}/>
                    </Document>
                </div>
            </div>
        );
    }
}

export default LicenseTerms;