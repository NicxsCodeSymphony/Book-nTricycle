import '../style/modal.css'

const Modal = ({closeModal, place, fare}) =>{


    const choosePlace = (location, pay, e) => {
        e.preventDefault()
        place(location)
        fare(pay)
        closeModal(false)
    }

    return(
        <div className="modalBackground">
            <div className="modalContainer">
                <button onClick={() => closeModal(false)}>X</button>
                <div class="place-wrapper">
            <h1>Select Place</h1>

           <div class="place-container">

           <div className="select-place" onClick={(e) => choosePlace('Bagay', 30, e)}>
                <p>Bagay</p>
                <p>₱ 30.00 </p>
            </div>

            <div className="select-place" onClick={(e) => choosePlace('Bakhawan', 30, e)}>
                <p>Bakhawan</p>
                <p>₱ 30.00 </p>
            </div>

            <div className="select-place" onClick={(e) => choosePlace('Bateria', 45, e)}>
                <p>Bateria</p>
                <p>₱ 45.00 </p>
            </div>

            <div className="select-place" onClick={(e) => choosePlace('Bitoon', 45, e)}>
                <p>Bitoon</p>
                <p>₱ 45.00 </p>
            </div>

            <div className="select-place" onClick={(e) => choosePlace('Calape', 35, e)}>
                <p>Calape</p>
                <p>₱ 35.00 </p>
            </div>

            <div className="select-place" onClick={(e) => choosePlace('Dalingding', 55, e)}>
                <p>Dalingding</p>
                <p>₱ 55.00 </p>
            </div>

            <div className="select-place" onClick={(e) => choosePlace('Lanao', 30, e)}>
                <p>Lanao</p>
                <p>₱ 30.00 </p>
            </div>

            <div className="select-place" onClick={(e) => choosePlace('Malbago', 45, e)}>
                <p>Malbago</p>
                <p>₱ 45.00 </p>
            </div>

            <div className="select-place" onClick={(e) => choosePlace('Malingin', 30, e)}>
                <p>Malingin</p>
                <p>₱ 30.00 </p>
            </div>

            <div className="select-place" onClick={(e) => choosePlace('Maya', 20, e)}>
                <p>Maya</p>
                <p>₱ 20.00 </p>
            </div>

            <div className="select-place" onClick={(e) => choosePlace('Pajo', 25, e)}>
                <p>Pajo</p>
                <p>₱ 25.00 </p>
            </div>

            <div className="select-place" onClick={(e) => choosePlace('Paypay', 30, e)}>
                <p>Paypay</p>
                <p>₱ 30.00 </p>
            </div>

            <div className="select-place" onClick={(e) => choosePlace('Talisay', 30, e)}>
                <p>Talisay</p>
                <p>₱ 30.00 </p>
            </div>

            <div className="select-place" onClick={(e) => choosePlace('Tapilon', 15, e)}>
                <p>Tapilon</p>
                <p>₱ 15.00 </p>
            </div>

            <div className="select-place" onClick={(e) => choosePlace('Tinubdan', 30, e)}>
                <p>Tinubdan</p>
                <p>₱ 30.00 </p>
            </div>
            
            <div className="select-place" onClick={(e) => choosePlace('Tominjao', e)}>
                <p>Tominjao</p>
                <p>₱ 45.00 </p>
            </div>
</div>

           </div>
            </div>
        </div>
    )

}



export default Modal


