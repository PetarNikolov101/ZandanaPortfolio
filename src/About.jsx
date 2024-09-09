export default function About(){
    let text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi doloremque eius molestiae mollitia totam saepe voluptatibus obcaecati nostrum, repudiandae doloribus nobis velit praesentium iste animi est dolor cum cupiditate perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi doloremque eius molestiae mollitia totam saepe voluptatibus obcaecati nostrum, repudiandae doloribus nobis velit praesentium iste animi est dolor cum cupiditate perspiciatis."
    return(
        <>
        <div>
            <h3 className="title" id="About">About</h3>
            <div className="about about-text text"style={{ color: 'black', fontSize: '16px' }}>
                <p className="about about-text text">{text}</p>
            </div>
            <div className="image">
                <img className="logo2" src="zandana_bejzh.png"></img>
            </div>
        </div>
        <hr></hr>
        </>
    )
}