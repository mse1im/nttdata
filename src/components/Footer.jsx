import logo from "./logo/footer-logo.png";

function Footer() {
    return (
      <footer className="bg-[#0059BC] mt-5 flex flex-col justify-between">
        <div className="container flex justify-between pt-20">
            <div className="company flex-1 flex flex-col text-white justify-between">
                <div className="flex flex-col">
                    <a className="logo" href="/"><figure><img src={logo} alt="NTTDATA" width="170" height="42" /> <figcaption className="hidden">NTTDATA</figcaption></figure></a>
                    <span className="pt-6 text-base hidden md:block font-normal">Lorem ipsum dolor sit amet consectetur. Auctor tempor pretium aliquam neque.</span>
                </div>
                <div className="subscribe pt-8 md:pt-0">
                    subscribe
                </div>
            </div>
            <div className="flex-1 text-white flex-col hidden md:flex lg:flex-row text-left justify-between items-center md:items-start">
                <ul className="flex flex-col gap-4">
                    <li className="text-2xl font-medium"><a href="/">Title</a></li>
                    <li className="hidden lg:block"><a href="/">Subtitle</a></li>
                    <li className="hidden lg:block"><a href="/">Subtitle</a></li>
                    <li className="hidden lg:block"><a href="/">Subtitle</a></li>
                    <li className="hidden lg:block"><a href="/">Subtitle</a></li>
                </ul>
                <ul className="flex flex-col gap-4">
                    <li className="text-2xl font-medium"><a href="/">Title</a></li>
                    <li className="hidden lg:block"><a href="/">Subtitle</a></li>
                    <li className="hidden lg:block"><a href="/">Subtitle</a></li>
                    <li className="hidden lg:block"><a href="/">Subtitle</a></li>
                    <li className="hidden lg:block"><a href="/">Subtitle</a></li>
                </ul>
                <ul className="flex flex-col gap-4">
                    <li className="text-2xl font-medium"><a href="/">Title</a></li>
                    <li className="hidden lg:block"><a href="/">Subtitle</a></li>
                    <li className="hidden lg:block"><a href="/">Subtitle</a></li>
                    <li className="hidden lg:block"><a href="/">Subtitle</a></li>
                    <li className="hidden lg:block"><a href="/">Subtitle</a></li>
                </ul>
            </div>
        </div>
        <div className="border-t border-solid border-white w-full copyright text-white mt-10">
            <div className="flex container justify-between py-6 md:text-xl text-xs font-normal">
                <a href="mailto:contact@nttdata.com">contact@nttdata.com</a>
                <a href="tel:+3 9876 765 444">+3 9876 765 444</a>
                <ul className="hidden md:flex gap-4">
                    <li><a href="https://www.instagram.com" target="_blank" rel="noreferrer">ig</a></li>
                    <li><a href="https://www.facebook.com" target="_blank" rel="noreferrer">fb</a></li>
                    <li><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">in</a></li>
                </ul>
            </div>
        </div>
      </footer>
    )
  }
  
  export default Footer;