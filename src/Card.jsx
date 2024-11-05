import profilePic from '../src/assets/88.png'


export default function Card() {
  return (
    <>
      <div className="card">
        <img className='card-image' src={profilePic} alt='profile image'/>
        <h2 className='card-title'>うさぎ</h2>
        <p className='card-text'>ちいかわのともだち。「ウラ」「ヤハ」など大声でよく叫ぶ。</p>
      </div>
    </>
  );
}
