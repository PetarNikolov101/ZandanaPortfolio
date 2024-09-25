export default function About(){
    let text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi doloremque eius molestiae mollitia totam saepe voluptatibus obcaecati nostrum, repudiandae doloribus nobis velit praesentium iste animi est dolor cum cupiditate perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi doloremque eius molestiae mollitia totam saepe voluptatibus obcaecati nostrum, repudiandae doloribus nobis velit praesentium iste animi est dolor cum cupiditate perspiciatis."
    return(
        <>
        <div className="about-full">
            <h3 className="title" id="About">Who are we?</h3>
            <div className="desc">
            <div className="desc-text"style={{ color: 'black', fontSize: '16px' }}>
                <p className="about about-text">{text}</p>
            </div>
            <div className="desc-img">
                <img className="logo2" src="zandana_bejzh.png"></img>
            </div>
            </div>
        </div>
        <hr id="Events"></hr>
        </>
    )
}