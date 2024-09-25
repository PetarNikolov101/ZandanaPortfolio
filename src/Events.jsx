import {useTranslation } from "react-i18next"

export default function Events(){
    const [t, i18next] = useTranslation("global")
    var header1 = t("header.title1")
    var header2 = t("header.title2")
    var header3 = t("header.title3")
    var header4 = t("header.title4")
  
    var message1 = t("body.message1")
    var message2 = t("body.message2")
    var message3 = t("body.message3")
    var message4 = t("body.message4")
    return(
        <>
        <h4 className="title">Events</h4>
        <div className="text">
            <p className="para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi cupiditate ea voluptas numquam accusamus qui iure suscipit asperiores error totam magni veniam molestiae, perferendis saepe sint quos. Perspiciatis, omnis aut! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente at reiciendis nobis laboriosam commodi expedita. Modi, incidunt architecto accusamus, facilis perferendis est earum minus molestiae, possimus obcaecati ad nemo! Quidem. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque quo vel est a velit ab doloremque beatae officia? Facere maiores quaerat, asperiores eveniet consequatur doloremque mollitia explicabo voluptatem architecto tempore.</p>
        </div>
<div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-interval="3000">
      <img src="photo2.jpg" className="d-block w-100 photo-bar-photo" alt="..."></img>
      <div className=" d-md-block photo-bar-text">

      </div>
    </div>
    <div className="carousel-item" data-interval="6000">
      <img src="photo1.jpg" className="d-block w-100 photo-bar-photo" alt="..."></img>
      <div className="d-block photo-bar-text">
      </div>
    </div>
    <div className="carousel-item" data-interval="6000">
      <img src="photo3.jpg" className="d-block w-100 photo-bar-photo" alt="..."></img>
      <div className="d-block photo-bar-text">
      </div>
    </div>
    <div className="carousel-item" data-interval="6000">
      <img src="photo4.jpg" className="d-block w-100 photo-bar-photo" alt="..."></img>
      <div className="d-block photo-bar-text">
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<hr id="Games"></hr>
</>
    )
}