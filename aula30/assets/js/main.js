function meuEscopo() {
    const texto = document.querySelector('.textoUm');

    function getDiaSemanaTexto(dia) {
        let diaSemanaTexto;
    
        switch (dia) {
            case 0:
                diaSemanaTexto = 'Domingo';
                return diaSemanaTexto;;
            case 1:
                diaSemanaTexto = 'Segunda-Feira';
                return diaSemanaTexto;;
            case 2:
                diaSemanaTexto = 'Terça-Feira';
                return diaSemanaTexto;;
            case 3:
                diaSemanaTexto = 'Quarta-Feira';
                return diaSemanaTexto;;
            case 4:
                diaSemanaTexto = 'Quinta-Feira';
                return diaSemanaTexto;;
            case 5:
                diaSemanaTexto = 'Sexta-Feira';
                return diaSemanaTexto;;
            case 6:
                diaSemanaTexto = 'Sábado';
                return diaSemanaTexto;;
            default:
                diaSemanaTexto = '';
                return diaSemanaTexto;;
        }
    }

    function getMes(mes) {
        let mesTexto;

        switch (mes) {
            case 0:
                mesTexto = 'Janeiro';
                return mesTexto;
            case 1:
                mesTexto = 'Feveiro';
                return mesTexto;
            case 2:
                mesTexto = 'Março';
                return mesTexto;
            case 3:
                mesTexto = 'Abril';
                return mesTexto;
            case 4:
                mesTexto = 'Maio';
                return mesTexto;
            case 5:
                mesTexto = 'Junho';
                return mesTexto;
            case 6:
                mesTexto = 'Julho';
                return mesTexto;
            case 7:
                mesTexto = 'Agosto';
                return mesTexto;
            case 8:
                mesTexto = 'Setembro';
                return mesTexto;
            case 9:
                mesTexto = 'Outubro';
                return mesTexto;
            case 10:
                mesTexto = 'Novembro';
                return mesTexto;
            case 11:
                mesTexto = 'Dezembro';
                return mesTexto;
            default:
                mesTexto = 'error'
                return mesTexto;  
        }
    }

    function zeroAEsquerda (num) {
        return num >= 10 ? num : `0${num}`;
    }
    
    const dataMS = Date.now();
    const data = new Date(dataMS);
    const dia = data.getDay();
    const diaSemanaTexto = getDiaSemanaTexto(dia);
    const mes = data.getMonth();
    const mesTexto = getMes(mes);
    const ano = data.getFullYear();
    const horas = data.getHours();
    const tempMinutos = data.getMinutes();
    const minutos = zeroAEsquerda(tempMinutos);

    texto.innerHTML = `${diaSemanaTexto}, ${dia} de ${mesTexto} de ${ano}. </br>${horas}:${minutos}`
}
meuEscopo();
