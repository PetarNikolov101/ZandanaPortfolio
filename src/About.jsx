export default function About(){
    let text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi doloremque eius molestiae mollitia totam saepe voluptatibus obcaecati nostrum, repudiandae doloribus nobis velit praesentium iste animi est dolor cum cupiditate perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi doloremque eius molestiae mollitia totam saepe voluptatibus obcaecati nostrum, repudiandae doloribus nobis velit praesentium iste animi est dolor cum cupiditate perspiciatis."
    return(
        <div className="text" id="about-paragraph"style={{ color: 'black', fontSize: '16px' }}>
            <p>{text}</p>
        </div>
    )
}