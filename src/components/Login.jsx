import "./login.css"

function Login() {
    return (
        <section className="container">
            <div className="content">
                <div className="CTA">
                    <img className="CTALogoOne" src="/images/cta-logo-one.svg" alt="" />
                    <button>GET ALL THERE</button>
                    <h2 className="description">Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase bt $1</h2>
                    <span className="icon-wrapper"><img src="/images/cta-logo-two.png" alt="" /></span>
                </div>
                <div className="bg-image" />
            </div>
        </section>
    )
}


export default Login