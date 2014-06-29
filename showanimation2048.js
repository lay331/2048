/**
 * Created by lay on 2014/6/28.
 */
function showNumberWithAnimation(randx,randy,randNumber){

    var numberCell=$("#number-cell-"+randx+"-"+randy);
    numberCell.css('background-color',getNumberBackgroundColor( randNumber) );
    numberCell.css('color',getNumberColor( randNumber ) );
    numberCell.text( randNumber );

    numberCell.animate({

        width:cellSideLength,
        height:cellSideLength,
        top:getPosTop(randx,randy),
        left:getPosLeft(randx,randy)


    },50);

}

function showMoveAnimation( fromx , fromy , tox, toy ){

    var numberCell = $('#number-cell-' + fromx + '-' + fromy );
    numberCell.animate({
        top:getPosTop( tox , toy ),
        left:getPosLeft( tox , toy )
    },200);
}

function updateScore(){

    $("#score").text(score);

}