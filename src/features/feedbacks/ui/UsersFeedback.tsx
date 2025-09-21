interface IUsersFeedback{
    name: string
    feedback: string
    imgSrc: string
    className?: string
}

export const UsersFeedback = ({name, feedback, imgSrc, className}:IUsersFeedback) =>{
    return (
        <div className={`product__testimonial__user ${className}`}>
            <div className="profile__info">
                <div className="profile__photo">
                    <img src={imgSrc} alt="photography"/>
                </div>
                <div className="profile__name">
                    <h3>{name}</h3>
                    <h4>Verified Buyer</h4>
                </div>
            </div>
            <div>
                <p>{feedback}</p>
            </div>
        </div>
    )
}