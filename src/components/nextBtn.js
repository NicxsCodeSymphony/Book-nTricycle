const NextBTN = ({url}) => {

    const handleClick = (e) => {
     
        e.preventDefault();
        
        if(url === 'payment'){
            window.location.href = '/receipt';
        }else{
            window.location.href = `/${url}`
        }
    }

    return(
        <div className="btnContainer">  <button className="proceedbtn" onClick={handleClick}>Proceed</button></div>
    )

}

export default NextBTN;