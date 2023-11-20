import banner from "./assets/banner-img.png";

function BannerSection() {
  return (
    <>
      <section class="banner_geral">
        <div class="banner_infos">
          <h2 class="name_banner">DEVDOUGLASLEITE</h2>
          <h1 class="welcome_banner">Bem vindo ao meu portfólio</h1>
          <h2 class="phrase_banner">
            Douglas é um entusiasta da tecnologia, apaixonado por musica, filmes, jogos e 
            programação.
          </h2>
          <button class="button_banner">Saiba Mais</button>
        </div>
        <img src={banner} alt="" />
      </section>
    </>
  );
}

export default BannerSection;
