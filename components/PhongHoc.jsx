import Image from "next/image"


function PhongHoc() {
  return (
    <div>
      <div className="flex flex-col justify-between items-center mr-4">
        <div>
          Học React Native từ đầu hoặc bổ sung kiến thức trước khi xin intern/fresher bằng việc học 1-1 với mình. Liên hệ qua FB:
        </div>
        <div>
          <a href="https://www.facebook.com/h7844/" className="text-blue-600">Việt Hoàng</a>
        </div>
      </div>
      <div className="flex items-center justify-center mt-5">
        <Image
          src="/assets/images/fb.jpg"
          width={300}
          height={500}
          alt="Picture of the author"
          className=''
        />
      </div>
    </div>

  )
}

export default PhongHoc