import React, { Component } from "react";
import { Link } from "react-router-dom";
import FFTSimulator from "./FFTSimulator";
import "./Home.css";
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Image,
  Button,
  ListGroup,
  Table
} from "react-bootstrap";

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Jumbotron className="jumbotron">
          <h2>Welcome to Comical Fourier</h2>
          <p>
            Comical Fourier is an Web application for Better understanding of
            Fourier transformation and Fourier Series.
          </p>
          <Link to="/simulate">
            <Button variant="primary">Simulate FFT</Button>
          </Link>
        </Jumbotron>
        <h1>Fourier Transforms</h1>
        <p>
          The Fourier transform is important in mathematics, engineering, and
          the physical sciences. Its discrete counterpart, the Discrete Fourier
          Transform (DFT), which is normally computed using the so-called Fast
          Fourier Transform (FFT), has revolutionized modern society, as it is
          ubiquitous in digital electronics and signal processing. Radio
          astronomers are particularly avid users of Fourier transforms because
          Fourier transforms are key components in data processing (e.g.,
          periodicity searches) and instruments (e.g., antennas, receivers,
          spectrometers), and they are the cornerstores of interferometry and
          aperture synthesis.
        </p>
        <p>
          The Fourier transform is a reversible, linear transform with many
          important properties. For any function f(x) (which in astronomy is
          usually real-valued, but f(x) may be complex), the Fourier transform
          can be denoted F(s), where the product of x and s is dimensionless.
          Often x is a measure of time t (i.e., the time-domain signal) and so s
          corresponds to inverse time, or frequency (i.e., the frequency-domain
          signal).{" "}
        </p>
        <h4>The Fourier transform is defined by</h4>
        <div className="image_div_1">
          <Col>
            <Image src="assets/f_01.jpg"  className="images_1"/>
          </Col>
          <Col>
            <Image src="assets/f_01.jpg"  className="images_2"/>
          </Col>
          </div>

        <p>
          which is the inverse transform. In both cases, i−1 . Alternative
          definitions of the Fourier transform are based on angular frequency
          (=2), have different normalizations, or the opposite sign convention
          in the complex exponential. Since Fourier transformation is
          reversible, the symmetric symbol is often used to mean "is the Fourier
          transform of"; e.g., F(s)f(x).
        </p>

        <p>
          The complex exponential is the heart of the transform. A complex
          exponential is simply a complex number where both the real and
          imaginary parts are sinusoids. The exact relation is called Euler's
          formula
        </p>

        <div className="image_div_2">
          <Image src="assets/euler_01-1.jpg"  className="images_3"/>
        </div>

        <p>
          which leads to the famous (and beautiful) identity ei+1=0 that relates
          five of the most important numbers in mathematics. Complex
          exponentials are much easier to manipulate than trigonometric
          functions, and they provide a compact notation for dealing with
          sinusoids of arbitrary phase, which form the basis of the Fourier
          transform.
        </p>

        <p>
          Complex exponentials (or sines and cosines) are periodic functions,
          and the set of complex exponentials is complete and orthogonal. Thus
          the Fourier transform can represent any piecewise continuous function
          and minimizes the least-square error between the function and its
          representation. There exist other complete and orthogonal sets of
          periodic functions; for example, Walsh functions (square waves) are
          useful for digital electronics. Why do we always encounter complex
          exponentials when solving physical problems? Why are monochromatic
          waves sinusoidal, and not periodic trains of square waves or
          triangular waves? The reason is that the derivatives of complex
          exponentials are just rescaled complex exponentials. In other words,
          the complex exponentials are the eigenfunctions of the differential
          operator. Most physical systems obey linear differential equations.
          Thus an analog electronic filter will convert a sine wave into another
          sine wave having the same frequency (but not necessarily the same
          amplitude and phase), while a filtered square wave will not be a
          square wave. This property of complex exponentials makes the Fourier
          transform uniquely useful in fields ranging from radio propagation to
          quantum mechanics.
        </p>

        <h4>The Discrete Fourier Transform</h4>
        <p>
          The continuous Fourier transform converts a time-domain signal of
          infinite duration into a continuous spectrum composed of an infinite
          number of sinusoids. In astronomical observations we deal with signals
          that are discretely sampled, usually at constant intervals, and of
          finite duration or periodic. For such data, only a finite number of
          sinusoids is needed and the Discrete Fourier Transform (DFT) is
          appropriate. For almost every Fourier transform theorem or property,
          there is a related theorem or property for the DFT. The DFT of N
          uniformly sampled data points xj (where j=0N−1) and its inverse are
          defined by
        </p>

        <div className="image_div_1">
          <Col>
            <Image src="assets/f_01.jpg"  className="images_1"/>
          </Col>
          <Col>
            <Image src="assets/f_01.jpg"  className="images_2"/>
          </Col>
          </div>
        <p>
          Once again, sign and normalization conventions may vary, but our
          definition is the most common. The continuous variable s has been
          replaced by the discrete variable (usually an integer) k.
        </p>

        <p>
          The result of the DFT of an N-point input time series is an N-point
          frequency spectrum, with Fourier frequencies k ranging from −(N2−1),
          through the 0-frequency or so-called "DC" component, and up to the
          highest Fourier frequency N/2. Each bin number represents the integer
          number of sinusoidal periods present in the time series. The
          amplitudes and phases represent the amplitudes Ak and phases k of
          those sinusoids. In summary, each bin can be described by Xk=Akeik .
        </p>

        <p>
          For real-valued input data, however, the resulting DFT is
          hermitian—the real-part of the spectrum is an even function and the
          imaginary part is odd, such that X−k=Xk, where the bar represents
          complex conjugation. This means that all of the "negative" Fourier
          frequencies provide no new information. Both the k=0 and k=N/2 bins
          are real-valued, and there is a total of N/2+1 Fourier bins, so the
          total number of independent pieces of information (i.e. real and
          complex parts) is N, just as for the input time series. No information
          is created or destroyed by the DFT.
        </p>
        <p>
          Other symmetries exist between time- and frequency-domain signals as
          well:
        </p>

        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Time Domain</th>
              <th>Frequency Domain</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>real</td>
              <td>hermitian (real=even, imag=odd)</td>
            </tr>
            <tr>
              <td>imaginary</td>
              <td>anti-hermitian (real=odd, imag=even)</td>
            </tr>

            <tr>
              <td>even</td>
              <td>even</td>
            </tr>
            <tr>
              <td>odd</td>
              <td>odd</td>
            </tr>

            <tr>
              <td>real and even</td>
              <td>real and even (i.e. cosine transform)</td>
            </tr>
            <tr>
              <td>real and odd</td>
              <td>imaginary and odd (i.e. sine transform)</td>
            </tr>

            <tr>
              <td>imaginary and even</td>
              <td>imaginary and even (real=even, imag=odd)</td>
            </tr>
            <tr>
              <td>imaginary and odd</td>
              <td>real and odd</td>
            </tr>
          </tbody>
        </Table>

        <p>
          Usually the DFT is computed by a very clever (and truly revolutionary)
          algorithm known as the Fast Fourier Transform or FFT. The FFT was
          discovered by Gauss in 1805 and re-discovered many times since, but
          most people attribute its modern incarnation to James W. Cooley and
          John W. Tukey ("An algorithm for the machine calculation of complex
          Fourier series," Math. Comput. 19, 297–301) in 1965. The key advantage
          of the FFT over the DFT is that the operational complexity decreases
          from O(N2) for a DFT to O(Nlog2(N)) for the FFT. Modern
          implementations of the FFT (such as FFTW) allow O(Nlog2(N)) complexity
          for any value of N, not just those that are powers of two or the
          products of only small primes.
        </p>

        <h4>More</h4>
        <br/>
        <a href="http://www.robots.ox.ac.uk/~sjrob/Teaching/SP/l7.pdf">1. Descrete Fourier Transformation</a>
        <br/>
        <br/>
        <br/>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/mkGsMWi_j4Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="iframe_1"></iframe>
        <br/>

      </Container>
    );
  }
}
