import React, {FC, useState} from "react"
import {Col, Container, Modal, Row} from "react-bootstrap"
import {Tile} from "../components/Tile"
import {TLanguage} from "../context/LanguageContext"

const imageURLs: [string, string][] = [
  ["_DUE8068 1.jpg", "thumbnail-_DUE8068 1.jpg"],
  ["_DUE8069.jpg", "thumbnail-_DUE8069.jpg"],
  ["_DUE8072.jpg", "thumbnail-_DUE8072.jpg"],
  ["_DUE8073 1.jpg", "thumbnail-_DUE8073 1.jpg"],
  ["_DUE8077.jpg", "thumbnail-_DUE8077.jpg"],
  ["_DUE8086.jpg", "thumbnail-_DUE8086.jpg"],
  ["_DUE8089.jpg", "thumbnail-_DUE8089.jpg"],
  ["_DUE8092.jpg", "thumbnail-_DUE8092.jpg"],
  ["_DUE8093.jpg", "thumbnail-_DUE8093.jpg"],
  ["_DUE8095.jpg", "thumbnail-_DUE8095.jpg"],
  ["_DUE8096.jpg", "thumbnail-_DUE8096.jpg"],
  ["_DUE8097.jpg", "thumbnail-_DUE8097.jpg"],
  ["_DUE8103 1.jpg", "thumbnail-_DUE8103 1.jpg"],
  ["_DUE8103 2.jpg", "thumbnail-_DUE8103 2.jpg"],
  ["_DUE8104.jpg", "thumbnail-_DUE8104.jpg"],
  ["_DUE8107 1.jpg", "thumbnail-_DUE8107 1.jpg"],
  ["_DUE8113.jpg", "thumbnail-_DUE8113.jpg"],
  ["_DUE8119.jpg", "thumbnail-_DUE8119.jpg"],
  ["_DUE8124.jpg", "thumbnail-_DUE8124.jpg"],
  ["_DUE8126.jpg", "thumbnail-_DUE8126.jpg"],
  ["_DUE8127.jpg", "thumbnail-_DUE8127.jpg"],
  ["_DUE8130.jpg", "thumbnail-_DUE8130.jpg"],
  ["_DUE8135.jpg", "thumbnail-_DUE8135.jpg"],
  ["_DUE8138.jpg", "thumbnail-_DUE8138.jpg"],
  ["_DUE8143.jpg", "thumbnail-_DUE8143.jpg"],
  ["_DUE8147.jpg", "thumbnail-_DUE8147.jpg"],
  ["_DUE8156.jpg", "thumbnail-_DUE8156.jpg"],
  ["DUE_4535.jpg", "thumbnail-DUE_4535.jpg"],
  ["DUE_4538 1.jpg", "thumbnail-DUE_4538 1.jpg"],
  ["DUE_4546.jpg", "thumbnail-DUE_4546.jpg"],
  ["DUE_4548.jpg", "thumbnail-DUE_4548.jpg"],
  ["DUE_4554 1.jpg", "thumbnail-DUE_4554 1.jpg"],
  ["DUE_4558.jpg", "thumbnail-DUE_4558.jpg"],
  ["DUE_4560.jpg", "thumbnail-DUE_4560.jpg"],
  ["DUE_4561.jpg", "thumbnail-DUE_4561.jpg"],
  ["DUE_4568.jpg", "thumbnail-DUE_4568.jpg"],
  ["DUE_4570.jpg", "thumbnail-DUE_4570.jpg"],
  ["DUE_4576.jpg", "thumbnail-DUE_4576.jpg"],
  ["DUE_4578.jpg", "thumbnail-DUE_4578.jpg"],
  ["DUE_4583.jpg", "thumbnail-DUE_4583.jpg"],
  ["DUE_4587.jpg", "thumbnail-DUE_4587.jpg"],
  ["DUE_4589.jpg", "thumbnail-DUE_4589.jpg"],
  ["DUE_4596.jpg", "thumbnail-DUE_4596.jpg"],
  ["DUE_4599.jpg", "thumbnail-DUE_4599.jpg"],
  ["DUE_4604.jpg", "thumbnail-DUE_4604.jpg"],
  ["DUE_4610.jpg", "thumbnail-DUE_4610.jpg"],
  ["DUE_4616.jpg", "thumbnail-DUE_4616.jpg"],
  ["DUE_4617.jpg", "thumbnail-DUE_4617.jpg"],
  ["DUE_4619.jpg", "thumbnail-DUE_4619.jpg"],
  ["DUE_4627 1.jpg", "thumbnail-DUE_4627 1.jpg"],
  ["DUE_4628.jpg", "thumbnail-DUE_4628.jpg"],
  ["DUE_4629.jpg", "thumbnail-DUE_4629.jpg"],
  ["DUE_4630.jpg", "thumbnail-DUE_4630.jpg"],
  ["DUE_4631.jpg", "thumbnail-DUE_4631.jpg"],
  ["DUE_4633.jpg", "thumbnail-DUE_4633.jpg"],
  ["DUE_4634.jpg", "thumbnail-DUE_4634.jpg"],
  ["DUE_4639.jpg", "thumbnail-DUE_4639.jpg"],
  ["DUE_4641.jpg", "thumbnail-DUE_4641.jpg"],
  ["DUE_4644.jpg", "thumbnail-DUE_4644.jpg"],
  ["DUE_4649.jpg", "thumbnail-DUE_4649.jpg"],
  ["DUE_4653 1.jpg", "thumbnail-DUE_4653 1.jpg"],
  ["DUE_4656.jpg", "thumbnail-DUE_4656.jpg"],
  ["DUE_4659.jpg", "thumbnail-DUE_4659.jpg"],
  ["DUE_4662.jpg", "thumbnail-DUE_4662.jpg"],
  ["DUE_4666.jpg", "thumbnail-DUE_4666.jpg"],
  ["DUE_4668.jpg", "thumbnail-DUE_4668.jpg"],
  ["DUE_4672.jpg", "thumbnail-DUE_4672.jpg"],
  ["DUE_4673.jpg", "thumbnail-DUE_4673.jpg"],
  ["DUE_4678.jpg", "thumbnail-DUE_4678.jpg"],
  ["DUE_4679.jpg", "thumbnail-DUE_4679.jpg"],
  ["DUE_4684.jpg", "thumbnail-DUE_4684.jpg"],
  ["DUE_4687.jpg", "thumbnail-DUE_4687.jpg"],
  ["DUE_4689.jpg", "thumbnail-DUE_4689.jpg"],
  ["DUE_4694.jpg", "thumbnail-DUE_4694.jpg"],
  ["DUE_4700.jpg", "thumbnail-DUE_4700.jpg"],
  ["DUE_4701.jpg", "thumbnail-DUE_4701.jpg"],
  ["DUE_4703.jpg", "thumbnail-DUE_4703.jpg"],
  ["DUE_4714.jpg", "thumbnail-DUE_4714.jpg"],
  ["DUE_4719.jpg", "thumbnail-DUE_4719.jpg"],
  ["DUE_4724.jpg", "thumbnail-DUE_4724.jpg"],
  ["DUE_4738.jpg", "thumbnail-DUE_4738.jpg"],
  ["DUE_4741.jpg", "thumbnail-DUE_4741.jpg"],
  ["DUE_4743.jpg", "thumbnail-DUE_4743.jpg"],
  ["DUE_4749.jpg", "thumbnail-DUE_4749.jpg"],
  ["DUE_4750.jpg", "thumbnail-DUE_4750.jpg"],
  ["DUE_4751.jpg", "thumbnail-DUE_4751.jpg"],
  ["DUE_4756.jpg", "thumbnail-DUE_4756.jpg"],
  ["DUE_4758.jpg", "thumbnail-DUE_4758.jpg"],
  ["DUE_4759.jpg", "thumbnail-DUE_4759.jpg"],
  ["DUE_4767.jpg", "thumbnail-DUE_4767.jpg"],
  ["DUE_4775.jpg", "thumbnail-DUE_4775.jpg"],
  ["DUE_4777.jpg", "thumbnail-DUE_4777.jpg"],
  ["DUE_4786.jpg", "thumbnail-DUE_4786.jpg"],
  ["DUE_4787.jpg", "thumbnail-DUE_4787.jpg"],
  ["DUE_4789.jpg", "thumbnail-DUE_4789.jpg"],
  ["DUE_4804.jpg", "thumbnail-DUE_4804.jpg"],
  ["DUE_4807.jpg", "thumbnail-DUE_4807.jpg"],
]

export const title: Record<TLanguage, string> = {
  danish: "Billeder",
  english: "Photos",
}

export const Images: FC = () => {
  const [image, setImage] = useState<string | null>(null)
  const [showImage, setShowImage] = useState<boolean>(false)

  return <>
    <Modal className="bg-transparent" size="lg" show={showImage} onClick={() => setShowImage(false)}
           onHide={() => setShowImage(false)}>
      <div className="text-center">
        {image && <img src={`${process.env.PUBLIC_URL}/${image}`} alt="" className="img-fluid"
                       style={{maxHeight: "80vh", width: "auto"}}/>}
      </div>
    </Modal>

    <Container>
      <Row><Col></Col></Row>

      <Row xs={2} sm={3} md={3} lg={4} xl={5} xxl={6}>
        {imageURLs.map(([url, thumbnail]) => (
          <Col className="py-1">
            <Tile background={`/images/photos/${thumbnail}`} onClick={() => {
              setImage(`/images/photos/${url}`)
              setShowImage(true)
            }}/>
          </Col>
        ))}
      </Row>
    </Container>
  </>
}