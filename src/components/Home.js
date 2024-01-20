import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./css/Home-style.css";

export default function Home() {
  return (
  < >
  {/* Mens */}
    <main className="border border-2 container">
      <div className="slider container w-100 mt-4 p-3   d-flex ">
        <Card style={{ width: "18rem" }} className="card m-3">
          <Card.Img
            variant="top"
            className="imga "
            src="https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/7/z/r/8-white-leaf-8-urbanbox-white-black-original-imagvgf4cuzs2hrw.jpeg?q=70"
          />
          <Card.Body>
            <Card.Title>Men Shoes</Card.Title>
            <Card.Text>
              Some quick example text to build on the Men Shoes and make up the
              bulk of the card's content.
            </Card.Text>
            <Link to={"/View"}>
              <Button variant="success">View</Button>
            </Link>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="card m-3">
          <Card.Img
            variant="top"
            className="imga"
            src="https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/e/f/c/8-tboot-8-kardam-sons-black-original-imagwvgwgvuk4c8t.jpeg?q=70"
          />
          <Card.Body>
            <Card.Title>Men Shoes</Card.Title>
            <Card.Text>
              Some quick example text to build on the Men Shoes and make up the
              bulk of the card's content.
            </Card.Text>
            <Link to={"/View"}>
              <Button variant="success">View</Button>
            </Link>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="card m-3">
          <Card.Img
            variant="top"
            className="imga"
            src="https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/h/v/t/-original-imagvyyyfpu2g6hz.jpeg?q=70"
          />
          <Card.Body>
            <Card.Title>Men Shoes</Card.Title>
            <Card.Text>
              Some quick example text to build on the Men Shoes and make up the
              bulk of the card's content.
            </Card.Text>
            <Link to={"/View"}>
              <Button variant="success">View</Button>
            </Link>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="card m-3">
          <Card.Img
            variant="top"
            className="imga"
            src="https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/n/w/t/6-brd-406-brd-466-6-birde-grey-orange-green-original-imag5ccyzzwrwwfh.jpeg?q=70"
          />
          <Card.Body>
            <Card.Title>Men Shoes</Card.Title>
            <Card.Text>
              Some quick example text to build on the Men Shoes and make up the
              bulk of the card's content.
            </Card.Text>
            <Link to={"/View"}>
              <Button variant="success">View</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
      <Link to={"/Showmore"} className='text-decoration-none '>
        <h4 className="more container text-end w-100">Show more...</h4>
      </Link>
    </main>

    {/* Womens */}
    <main className="border border-2 container">
      <div className="slider container w-100 mt-4 p-3   d-flex ">
        <Card style={{ width: "18rem" }} className="card m-3">
          <Card.Img
            variant="top"
            className="imga "
            src="https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/i/b/r/3xl-suraj-faishon-women-rayon-anarkali-kurta-duptta-set-suraj-original-imagm4xwjffra7zg.jpeg?q=70"
          />
          <Card.Body>
            <Card.Title>Womens Cloths</Card.Title>
            <Card.Text>
              Some quick example text to build on the Womens Cloths and make up the
              bulk of the card's content.
            </Card.Text>
            <Link to={"/View"}>
              <Button variant="success">View</Button>
            </Link>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="card m-3">
          <Card.Img
            variant="top"
            className="imga"
            src="https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/o/b/t/xxl-13063o-multicolor-libas-original-imagfwsw4guamyaf-bb.jpeg?q=70"
          />
          <Card.Body>
            <Card.Title>Womens Cloths</Card.Title>
            <Card.Text>
              Some quick example text to build on the Womens Cloths and make up the
              bulk of the card's content.
            </Card.Text>
            <Link to={"/View"}>
              <Button variant="success">View</Button>
            </Link>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="card m-3">
          <Card.Img
            variant="top"
            className="imga"
            src="https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/d/h/f/m-pp-9206-pptoss-original-imagkyh7v6zefhdd.jpeg?q=70"
          />
          <Card.Body>
            <Card.Title>Womens Cloths</Card.Title>
            <Card.Text>
              Some quick example text to build on the Womens Cloths and make up the
              bulk of the card's content.
            </Card.Text>
            <Link to={"/View"}>
              <Button variant="success">View</Button>
            </Link>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="card m-3">
          <Card.Img
            variant="top"
            className="imga"
            src="https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/i/v/s/xl-9001-kamdev-original-imaghg2hdsvjgaav.jpeg?q=70"
          />
          <Card.Body>
            <Card.Title>Womens Cloths</Card.Title>
            <Card.Text>
              Some quick example text to build on the Men Shoes and make up the
              bulk of the card's content.
            </Card.Text>
            <Link to={"/View"}>
              <Button variant="success">View</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
      <Link to={"/Showmore"} className='text-decoration-none '>
        <h4 className="more container text-end w-100">Show more...</h4>
      </Link>
    </main>

    {/* Mens cloths */}
    <main className="border border-2 container">
      <div className="slider container w-100 mt-4 p-3   d-flex ">
        <Card style={{ width: "18rem" }} className="card m-3">
          <Card.Img
            variant="top"
            className="imga "
            src="https://rukminim2.flixcart.com/image/612/612/l3j2cnk0/t-shirt/2/w/p/l-723-2-5-7-8-ftx-original-imagemgrpafdug8v.jpeg?q=70"
          />
          <Card.Body>
            <Card.Title>Men Cloths</Card.Title>
            <Card.Text>
              Some quick example text to build on the Men Cloths and make up the
              bulk of the card's content.
            </Card.Text>
            <Link to={"/View"}>
              <Button variant="success">View</Button>
            </Link>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="card m-3">
          <Card.Img
            variant="top"
            className="imga"
            src="https://rukminim2.flixcart.com/image/612/612/l4zxn680/t-shirt/k/i/9/s-bbldgywmrdpolo-pl5-blive-original-imagfsychqyua2cg.jpeg?q=70"
          />
          <Card.Body>
            <Card.Title>Men Cloths</Card.Title>
            <Card.Text>
              Some quick example text to build on the Men Cloths and make up the
              bulk of the card's content.
            </Card.Text>
            <Link to={"/View"}>
              <Button variant="success">View</Button>
            </Link>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="card m-3">
          <Card.Img
            variant="top"
            className="imga"
            src="https://rukminim2.flixcart.com/image/612/612/jvtujrk0/t-shirt/a/g/f/l-8938267-roadster-original-imafgn8grewzy9tf.jpeg?q=70"
          />
          <Card.Body>
            <Card.Title>Men Cloths</Card.Title>
            <Card.Text>
              Some quick example text to build on the Men Cloths and make up the
              bulk of the card's content.
            </Card.Text>
            <Link to={"/View"}>
              <Button variant="success">View</Button>
            </Link>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="card m-3">
          <Card.Img
            variant="top"
            className="imga"
            src="https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/b/f/0/l-ausk0622-ausk-original-imagvfpfszrgzzar.jpeg?q=70"
          />
          <Card.Body>
            <Card.Title>Men Cloths</Card.Title>
            <Card.Text>
              Some quick example text to build on the Men Cloths and make up the
              bulk of the card's content.
            </Card.Text>
            <Link to={"/View"}>
              <Button variant="success">View</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
      <Link to={"/Showmore"} className='text-decoration-none '>
        <h4 className="more container text-end w-100">Show more...</h4>
      </Link>
    </main>

    {/* womens Footware */}
    <main className="border border-2 container">
      <div className="slider container w-100 mt-4 p-3   d-flex ">
        <Card style={{ width: "18rem" }} className="card m-3">
          <Card.Img
            variant="top"
            className="imga "
            src="https://rukminim2.flixcart.com/image/612/612/l3vxbbk0/shoe/l/a/i/8-brd-752-8-birde-pink-original-imagewqx2fkajtgp.jpeg?q=70"
          />
          <Card.Body>
            <Card.Title>Womens Shoes</Card.Title>
            <Card.Text>
              Some quick example text to build on the Womens Shoes and make up the
              bulk of the card's content.
            </Card.Text>
            <Link to={"/View"}>
              <Button variant="success">View</Button>
            </Link>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="card m-3">
          <Card.Img
            variant="top"
            className="imga"
            src="https://rukminim2.flixcart.com/image/612/612/l2krs7k0/shoe/m/x/z/5-704-rowlans-pink-original-imagdvyhxxkxjpfq.jpeg?q=70"
          />
          <Card.Body>
            <Card.Title>Womens Shoes</Card.Title>
            <Card.Text>
              Some quick example text to build on the Womens Shoes and make up the
              bulk of the card's content.
            </Card.Text>
            <Link to={"/View"}>
              <Button variant="success">View</Button>
            </Link>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="card m-3">
          <Card.Img
            variant="top"
            className="imga"
            src="https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/z/p/i/4-ld3951-4-layasa-cream-white-original-imagvxwvghxyqhgy.jpeg?q=70"
          />
          <Card.Body>
            <Card.Title>Womens Shoes</Card.Title>
            <Card.Text>
              Some quick example text to build on the Womens Shoes and make up the
              bulk of the card's content.
            </Card.Text>
            <Link to={"/View"}>
              <Button variant="success">View</Button>
            </Link>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="card m-3">
          <Card.Img
            variant="top"
            className="imga"
            src="https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/c/p/g/4-ori-a-9053-4-bersache-white-original-imagpgssykbfuksb.jpeg?q=70"
          />
          <Card.Body>
            <Card.Title>Womens Shoes</Card.Title>
            <Card.Text>
              Some quick example text to build on the Womens Shoes and make up the
              bulk of the card's content.
            </Card.Text>
            <Link to={"/View"}>
              <Button variant="success">View</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
      <Link to={"/Showmore"} className='text-decoration-none '>
        <h4 className="more container text-end w-100">Show more...</h4>
      </Link>
    </main>

    </>
  );
}
