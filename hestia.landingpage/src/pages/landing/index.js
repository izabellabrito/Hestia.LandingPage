import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import './styles.css';
import './keyframes.css';

import dry from '../../assets/landing/dry.png';
import washingclothes from '../../assets/landing/washingclothes.png';
import washingmachine from '../../assets/landing/washingmachine.png';
import iphone from '../../assets/landing/iphone.png';
import coracao from '../../assets/landing/coracao.png';
import imgbanner from '../../assets/landing/imgbanner.png';
import funciona1 from '../../assets/landing/funciona1.png';
import funciona2 from '../../assets/landing/funciona2.png';
import funciona3 from '../../assets/landing/funciona3.png';

import 'animate.css';

export default function Landing() {
	const [scrollY, setScrollY] = useState(0);
	const [showShadow, setShowShadow] = useState(false);

	function logit() {
		setScrollY(window.pageYOffset);
	}

	function abrirMenu() {
		document.getElementById('menu-aberto').style.display = 'block';
	}

	function fecharMenu() {
		document.getElementById('menu-aberto').style.display = 'none';
	}

	function irOpcoesMenu(section) {
		document.getElementById('menu-aberto').style.display = 'none';
		window.location.href = section;
	}

	useEffect(() => {
		function watchScroll() {
			window.addEventListener('scroll', logit);
			scrollY > 100 ? setShowShadow(true) : setShowShadow(false);
		}
		watchScroll();
		return () => {
			window.removeEventListener('scroll', logit);
		};
	});

	return (
		<div className="wrapper">
			<nav id="navbar">
				<div className={`container ${showShadow ? 'shadow nav-active' : ''}`}>
					<div className="mobile">
						<div className="logo"></div>
						<div className="menu-icon">
							<FontAwesomeIcon icon={faBars} onClick={abrirMenu} />
						</div>
						<div id="menu-aberto">
							<div className="btn-fechar">
								<FontAwesomeIcon icon={faTimes} onClick={fecharMenu} />
							</div>
							<ul>
								<li onClick={() => irOpcoesMenu('#home')}>Inicio</li>
								<li onClick={() => irOpcoesMenu('#servicos')}>Serviços</li>
								<li onClick={() => irOpcoesMenu('#como-funciona')}>Como funciona?</li>
								<li onClick={() => irOpcoesMenu('#contato')}>Contato</li>
								<li onClick={() => irOpcoesMenu('#baixe-o-app')}>Baixe o app</li>
							</ul>
						</div>
					</div>
					<div className="desktop">
						<div className="logo"></div>
						<div className="menu">
							<ul>
								<li>
									<a href="#home">Inicio</a>
								</li>
								<li>
									<a href="#servicos">Serviços</a>
								</li>
								<li>
									<a href="#como-funciona">Como funciona?</a>
								</li>
								<li>
									<a href="#contato">Contato</a>
								</li>
								<li>
									<a href="#baixe-o-app">Baixe o app</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
			<section id="home">
				<div id="banner">
					<div className="conteudo" data-aos="fade-down" data-aos-duration="700">
						<h1 className="titulo">
							Suas roupas limpinhas sem você sair de casa
							<img src={coracao} alt="" />
						</h1>
						<a href="#servicos" className="shadow btn-saibamais">
							Saiba mais
						</a>
					</div>
					<div className="imagem" data-aos="zoom-in" data-aos-duration="700">
						<img src={imgbanner} alt="" />
					</div>
				</div>
			</section>
			<section id="servicos">
				<div className="conteudo">
					<h1 className="titulo" data-aos="zoom-in" data-aos-duration="700">
						Serviços
					</h1>
					<span className="descricao" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="700">
						A <strong>Hestia</strong> oferece diversos serviços, desde lavagem de roupa à passadoria. Conte
						com nossos parceiros para te ajudar na correria do seu dia-a-dia.
					</span>
				</div>
				<div className="servicos-items">
					<div className="item" data-aos="fade-up" data-aos-duration="600">
						<div className="imagem">
							<img src={dry} alt="" />
						</div>
						<div className="conteudo">
							<h4 className="sub-titulo">Passadoria</h4>
							<span className="descricao">Serviço de passar roupa</span>
						</div>
					</div>
					<div className="item" data-aos="fade-up" data-aos-delay="30" data-aos-duration="1000">
						<div className="imagem">
							<img src={washingmachine} alt="" />
						</div>
						<div className="conteudo">
							<h4 className="sub-titulo">Lavagem premium</h4>
							<span className="descricao">Serviço de lavagem, secagem e passadoria</span>
						</div>
					</div>
					<div className="item" data-aos="fade-up" data-aos-delay="60" data-aos-duration="1300">
						<div className="imagem">
							<img src={washingclothes} alt="" />
						</div>
						<div className="conteudo">
							<h4 className="sub-titulo">Lavagem comum</h4>
							<span className="descricao">Serviço de lavagem e secagem</span>
						</div>
					</div>
				</div>
			</section>
			<section id="como-funciona">
				<div className="conteudo">
					<h1 className="titulo" data-aos="zoom-in" data-aos-duration="700">
						Como funciona?
					</h1>
					<span className="descricao" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="700">
						Nossa plataforma foi criada para trazer praticidade à sua rotina, nosso propósito é facilitar o
						serviço de lavagem e liberar um tempinho para que você possa curtir como bem entender.
					</span>
				</div>
				<div className="como-funciona-items">
					<div className="item" data-aos="fade-up" data-aos-duration="600">
						<div className="imagem">
							<img src={funciona1} alt="" />
						</div>
						<div className="conteudo">
							<h4 className="sub-titulo">Sem esforço</h4>
							<span className="descricao">Tudo que você precisa é baixar nosso aplicativo</span>
						</div>
					</div>
					<div className="item" data-aos="fade-up" data-aos-delay="30" data-aos-duration="1000">
						<div className="imagem">
							<img src={funciona2} alt="" />
						</div>
						<div className="conteudo">
							<h4 className="sub-titulo">Pertinho de você</h4>
							<span className="descricao">Encontre nossos parceiros mais próximos de você</span>
						</div>
					</div>
					<div className="item" data-aos="fade-up" data-aos-delay="60" data-aos-duration="1300">
						<div className="imagem">
							<img src={funciona3} alt="" />
						</div>
						<div className="conteudo">
							<h4 className="sub-titulo">Aproveite seu tempo!</h4>
							<span className="descricao">
								Solicite o serviço e tenha mais tempo para fazer suas coisas!
							</span>
						</div>
					</div>
				</div>
			</section>
			<section id="contato">
				<div className="conteudo" data-aos="fade-down" data-aos-duration="700">
					<h1 className="titulo">Ficou interessado(a)? Fala pra gente!</h1>
					<span className="descricao">
						Sua opinião é muito importante para gente! Se você gostou da ideia, por favor, nos deixe ciente!
					</span>
				</div>
				<form className="form" data-aos="zoom-in" data-aos-duration="700">
					<input className="shadow" type="email" placeholder="Digite seu email" />
					<button className="shadow btn-enviar">Enviar</button>
				</form>
			</section>
			<section id="baixe-o-app">
				<div className="conteudo" data-aos="fade-down" data-aos-duration="700">
					<h1 className="titulo">Venha e acesse nosso app!</h1>
					<img src={iphone} alt="" />
					<span className="descricao">
						Nosso aplicativo é totalmente gratuíto e fácil de usar! Clique no botão abaixo e comece a usar!
					</span>
					<a href="#home" className="shadow btn-acesse">
						Acesse agora
					</a>
				</div>
				<div className="imagem" data-aos="zoom-in" data-aos-duration="700">
					<img src={iphone} alt="" />
				</div>
			</section>
			<footer>
				<div className="logo"></div>
				<div className="infos">
					<p>
						Dúvidas ou sugestões, nos envie um email: {' '}
						<strong>servicoslavagem.hestia@gmail.com</strong>
					</p>
				</div>
			</footer>
		</div>
	);
}
