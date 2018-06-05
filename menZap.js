/*
 * Mensagens de bom dia, estilo zapzop
 *
 * Autor: Lucas Resende de Sousa Amaral
 * Email: lucasresone@gmail.com
 *
 *
 */



 function typeWriter(str, el) {
 	/*
	 * https://pt.stackoverflow.com/questions/64021/texto-que-se-digita-aos-poucos
 	 */
	let char = str.split('').reverse();

	let typer = setInterval(function() {
		if (!char.length) return clearInterval(typer);
		let next = char.pop();
		el.innerHTML += next;
	}, 100);
}

function menZap(el,effect){
	/*
	 * mensagens retiradas:
	 * https://www.mensagens10.com.br/mensagens-de-bom-dia/page/4
	 * https://www.frasesdobem.com.br/frases-de-autoestima
	 */
	let msg = [
				'"Hoje o dia está lindo!"',
				'"Não podemos ter todos os dias bons… mas podemos ter algo bom todos os dias!"',
				'"Hoje você tem duas opções: ser feliz ou ser mais feliz ainda. Bom dia!"',
				'"Um pequeno pensamento positivo pela manhã pode mudar todo seu dia."',
				'"Bom dia, alegria!"',
				'"Tenha um bom dia, uma semana fantástica e uma vida maravilhosa."',
				'"Um elogio sincero pode mudar o seu dia, que tal mudar o dia de alguém hoje?"',
				'"Cada dia é uma nova chance pra recomeçar!"',
				'"Sorria e tenha um bom dia!"',
				'"Levanta, sacode a poeira e dá a volta por cima!"',
				'"♥ Bom dia! ♥"',
				'"E quando amanhecer, não deixe seus sonhos no travesseiro."',
				'"Bom dia! Sinta o aroma da manhã! Acorde para sonhar uma vida."',
				'"Bom dia! E nunca desista de ser feliz!"',
				'"Bom dia flor do dia."',
				'"Happy day :)"',
				'"Que o seu dia seja repleto de alegria."',
				'"Hoje é um lindo dia, não deixe que ele fuja."',
				'"Que o dia te permita olhar o céu apesar da correria."',
				'"O bom dia que você deseja só depende de você."',
				'"Um novo dia sempre vem com algo de bom."',
				'"Você decide como será o seu dia."',
				'"Não deixe que as pessoas te façam desistir daquilo que você mais quer na vida."',
				'"Não importa o que você decidiu. O que importa é que isso te faça feliz."',
				'"O que você tem de diferente é o que você tem de mais bonito."',
				'"Viva simples, sonhe grande, seja grato, dê amor, ria muito!"',
				'"Independente do que estiver sentindo, levante-se, vista-se e saia para brilhar."',
				'"Esqueça. Sorria. Deixe ir."',
				'"Seja você mesmo, todos os outros já existem."',
				'"Deixe o seu sorriso mudar o mundo, mas nunca deixe o mundo mudar o seu sorriso."',
				'"Não deixe que o medo de cair te impeça de voar."',
				'"Crescer, evoluir e manter as bases fortes!"',
				'"Seja a melhor versão de você mesma."',
				];

	let _el_ = document.getElementById(el);
	let coiche = Math.floor((Math.random() * msg.length));

	switch(effect){
		case 'typeWriter':
			typeWriter(msg[coiche],_el_);
		break;
	}

}