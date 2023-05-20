import './styles.css';
const Buttons = ({handleSetInfos, users}) => {

    return (
        <>
        <button className={`btn other-style ${users === 'users' ? 'btn-active' : ''}`} onClick={()=> handleSetInfos ('users')}>Users</button>
        <button className={`btn other-style ${users === 'posts' ? 'btn-active' : ''}`} onClick={() => handleSetInfos ('posts')}>Posts</button>
        </>
    )
}

export default Buttons;