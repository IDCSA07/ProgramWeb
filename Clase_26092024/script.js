function appenToDisplay(value){
    document.getElementById('display').value += value;
}
function clearDsiplay(){
    document.getElementById('display').value = '';
}
function deleteLast(value){
    let displayValue = document.getElementById('display').value;
    document.getElementById('display').value = displayValue.slice(0, -1);
}
function appenToDisplay(value){
    try{
        let result =eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    }catch {
        alert('Expresion invalida');
    }
    
}
