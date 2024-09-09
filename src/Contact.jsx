export default function Contact(){
    return (
        <>
        <footer className="text-center">
            <h4 className="title">Contact</h4>
            
            <div className="container pt-2">
            <section className="mb-4">
                <a data-mdb-ripple-init
                className="btn btn-link btn-floating btn-lg text-body m-1"
                href="https://www.instagram.com/zandana.mk/"
                role="button"
                data-mdb-ripple-color="dark"
                target="_blank"
                ><img src="instagram.png" style={{maxWidth: '30px'}}></img></a>

                <a
                 data-mdb-ripple-init
                className="btn btn-link btn-floating btn-lg text-body m-1"
                href="https://linktr.ee/zandana"
                role="button"
                data-mdb-ripple-color="dark"
                target="_blank"
                ><img style={{maxWidth: '30px'}} src="linktree.png"></img></a>

                <a data-mdb-ripple-init
                className="btn btn-link btn-floating btn-lg text-body m-1"
                href="https://www.instagram.com/zandana.mk/"
                role="button"
                data-mdb-ripple-color="dark"
                target="_blank"
                ><img src="itchio.png" style={{maxWidth: '30px'}}></img></a>
            </section>
            </div>
            <div className="text-center p-3" style={{ backgroundColor: 'rgb(0,0,0)', color: "white"}}>
                E-mail: zanada.event@gmail.com
                <br></br>
                Telephone: 000-000-000
            </div>
        </footer>
        </>
    )
}