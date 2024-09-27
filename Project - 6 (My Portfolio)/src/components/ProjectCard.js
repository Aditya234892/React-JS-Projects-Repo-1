import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, link, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br/>
          <a href={link} className="text-white text-decoration-none" target="_blank">Go to 🔗</a>
        </div>
      </div>
    </Col>
  )
}
