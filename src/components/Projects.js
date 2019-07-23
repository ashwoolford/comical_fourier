import React, { Component } from 'react'
import { Container } from 'react-bootstrap';

export default class Projects extends Component {
    render() {
        return (
            <Container>
                <br/>
                <h3>Projects on FFT</h3>
                <a href="https://colab.research.google.com/drive/1OJ3fZZSu6mHsKNdXep5y5CYzLKr5w136">1. Sound Wave Filtering Using FFT and iFFT in python</a>
                <br/>
                <a href="https://drive.matlab.com/sharing/dbbce683-8dc3-4762-900b-47cc0d8032f0">2. Image Compression using FFT and iFFT in Matlab/Octave</a>
            </Container>
        )
    }
}
