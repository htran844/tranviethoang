"use client"
import { useState } from 'react';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import "../styles/style-range.css"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const TinhTHPT = () => {
    const [toan, setToan] = useState(0)
    const [ly, setLy] = useState(0)
    const [hoa, setHoa] = useState(0)
    const [anh, setAnh] = useState(0)
    const [van, setVan] = useState(0)
    const [damme, setDamme] = useState(0)
    const [point, setPoint] = useState(0)
    const [loiKhuyen, setLoiKhuyen] = useState([])
    const handleKiemtra = () => {
        let listLoiKhuyen = []
        let p_toan = toan * 2
        let p_ly = ly * 2
        let p_hoa = hoa
        let p_anh = anh * 2.5
        let p_van = van
        let p_damme = damme * 1.5
        let total = Number(p_toan + p_ly + p_hoa + p_anh + p_van + p_damme)
        console.log("total", total)
        if (toan < 5) {
            total = total - 20
            listLoiKhuyen.push("Toán dốt thế này không học được đâu em ơi")
        } else if (toan < 7) {
            total = total - 10
            listLoiKhuyen.push("Toán hơi kém không nên học AI linh tinh đồ")
        } else if (toan < 8) {
            total = total - 5
            listLoiKhuyen.push("Toán này tư duy tạm ổn, cố lên nhé")
        } else if (toan < 9) {
            total = total - 3
            listLoiKhuyen.push("Toán tư duy oke đấy")
        } else {
            total = total + 5
            listLoiKhuyen.push("Giỏi toán phết, học thì game là dễ")
        }

        if (ly < 5) {
            total = total - 10
            listLoiKhuyen.push("Lý dốt vậy, không thi khối A với A1 à")
        } else if (ly < 7) {
            total = total - 8
            listLoiKhuyen.push("Lý hơi kém, nhưng nếu toán cao là được")
        } else if (ly < 8) {
            total = total - 5
            listLoiKhuyen.push("Điểm lý khá, tạm oke")
        } else if (ly < 9) {
            total = total - 3
            listLoiKhuyen.push("Điểm lý này cho trí tưởng tượng phong phú rồi")
        } else {
            total = total + 5
            listLoiKhuyen.push("Trí tưởng tượng max ping, chiến hết  :))")
        }

        if (hoa < 5) {
            total = total - 8
            listLoiKhuyen.push("Hoá thấp chắc do thi A1 nhỉ, không sao")
        } else if (hoa < 7) {
            total = total - 4
            listLoiKhuyen.push("Hoá này đủ dùng quỳ tím phân biệt axit với bazo rồi")
        } else if (hoa < 8) {
            total = total - 0
            listLoiKhuyen.push("Hoá ổn, cơ mà IT ko liên quan hoá quá")
        } else if (hoa < 9) {
            total = total - 0
            listLoiKhuyen.push("Tư duy hoá học tốt đấy")
        } else {
            total = total + 3
            listLoiKhuyen.push("Điểm hoá cao, giỏi!")
        }

        if (anh < 5) {
            total = total - 15
            listLoiKhuyen.push("Dốt Anh như này học ngay bây giờ đi")
        } else if (anh < 7) {
            total = total - 10
            listLoiKhuyen.push("Học tiếng anh ngay đi càng giỏi càng tốt")
        } else if (anh < 8) {
            total = total - 5
            listLoiKhuyen.push("Hết năm nhất phải lên ielts 6.0 nhé")
        } else if (anh < 9) {
            total = total - 0
            listLoiKhuyen.push("Điểm anh ổn rồi, tham gia luyện giao tiếp nữa nhé")
        } else {
            total = total + 5
            listLoiKhuyen.push("Giỏi tiếng anh như này học nhàn cực")
        }

        if (van < 5) {
            total = total - 5
            listLoiKhuyen.push("Điểm văn này sao cãi được tester em ơi")
        } else if (van < 7) {
            total = total - 2
            listLoiKhuyen.push("Sau này thuyết trình cần Văn đấy, luyện đi")
        } else if (van < 8) {
            total = total - 0
            listLoiKhuyen.push("Văn này cũng ổn")
        } else if (van < 9) {
            total = total - 5
            listLoiKhuyen.push("Văn tốt, sau này dẹp loạn tester")
        } else {
            total = total + 5
            listLoiKhuyen.push("Chém gió như thần à")
        }

        if (damme < 5) {
            total = total - 15
            listLoiKhuyen.push("Không đam mê thì học IT chi zậy ba!")
        } else if (damme < 7) {
            total = total - 10
            listLoiKhuyen.push("Nếu lưỡng lự thì nên tham khảo nhiều ngành khác nữa nhé")
        } else if (damme < 8) {
            total = total - 5
            listLoiKhuyen.push("Có đam mê, cố gắng nữa là được")
        } else if (damme < 9) {
            total = total - 5
            listLoiKhuyen.push("Có đam mê thì cày sẽ vui")
        } else {
            total = total + 5
            listLoiKhuyen.push("Mỗi lần code là một lần vui")
        }


        console.log(total)
        if (total > 100) {
            total = 100
        }
        if (total < 0) {
            total = 0
        }
        setLoiKhuyen(listLoiKhuyen)
        setPoint(total.toFixed(2))
    }
    return (
        <div className='relative'>
            <div className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>Tính độ phù hợp với ngành IT </div>
            <div className='flex flex-row justify-center items-center h-64 '>
                <div className='flex flex-col-reverse justify-center items-center h-64 my-4 w-14'>
                    <div className='w-2/5 h-10'>Toán: {toan}</div>
                    <RangeSlider
                        orientation={"vertical"}
                        className="single-thumb w-3/5 reverse"
                        defaultValue={[10, 10]}
                        thumbsDisabled={[false, true]}
                        rangeSlideDisabled={true}
                        step={0.2}
                        min={0}
                        max={10}
                        onInput={(value) => {
                            setToan(Number((10 - value[0]).toFixed(1)))
                        }}
                    />
                </div>
                <div className='flex flex-col-reverse justify-center items-center h-64 my-4 w-14'>
                    <div className='w-2/5 h-10'>Lý: {ly}</div>
                    <RangeSlider
                        orientation={"vertical"}
                        className="single-thumb w-3/5 reverse"
                        defaultValue={[10, 10]}
                        thumbsDisabled={[false, true]}
                        rangeSlideDisabled={true}
                        step={0.25}
                        min={0}
                        max={10}
                        onInput={(value) => {
                            setLy(Number((10 - value[0]).toFixed(1)))
                        }}
                    />
                </div>
                <div className='flex flex-col-reverse justify-center items-center h-64 my-4 w-14'>
                    <div className='w-2/5 h-10'>Hoá: {hoa}</div>
                    <RangeSlider
                        orientation={"vertical"}
                        className="single-thumb w-3/5 reverse"
                        defaultValue={[10, 10]} thumbsDisabled={[false, true]}
                        rangeSlideDisabled={true}
                        step={0.25}
                        min={0}
                        max={10}
                        onInput={(value) => {
                            setHoa(Number((10 - value[0]).toFixed(1)))
                        }}
                    />
                </div>
                <div className='flex flex-col-reverse justify-center items-center h-64 my-4 w-14'>
                    <div className='w-2/5 h-10'>Anh: {anh}</div>
                    <RangeSlider
                        orientation={"vertical"}
                        className="single-thumb w-3/5 reverse"
                        defaultValue={[10, 10]} thumbsDisabled={[false, true]}
                        rangeSlideDisabled={true}
                        step={0.25}
                        min={0}
                        max={10}
                        onInput={(value) => {
                            setAnh(Number((10 - value[0]).toFixed(1)))
                        }}
                    />
                </div>
                <div className='flex flex-col-reverse justify-center items-center h-64 my-4 w-14'>
                    <div className='w-2/5 h-10'>Văn: {van}</div>
                    <RangeSlider
                        orientation={"vertical"}
                        className="single-thumb w-3/5 reverse"
                        defaultValue={[10, 10]}                       // value={[0, toan]}
                        thumbsDisabled={[false, true]}
                        rangeSlideDisabled={true}
                        step={0.2}
                        min={0}
                        max={10}
                        onInput={(value) => {
                            setVan(Number((10 - value[0]).toFixed(1)))
                        }}
                    />
                </div>
                <div className='flex flex-col-reverse justify-center items-center h-64 my-4 w-14'>
                    <div className='w-2/5 h-10'>Đam mê: {damme}</div>
                    <RangeSlider
                        orientation={"vertical"}
                        className="single-thumb w-3/5 reverse"
                        defaultValue={[10, 10]} thumbsDisabled={[false, true]}
                        rangeSlideDisabled={true}
                        step={0.1}
                        min={0}
                        max={10}
                        onInput={(value) => {
                            setDamme(Number((10 - value[0]).toFixed(1)))
                        }}
                    />
                </div>
            </div>
            <div className='h-10'></div>
            <div className='h-74'>
                <div className='flex flex-col justify-center items-center h-64'>
                    <button
                        className="my-4 w-19 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => { handleKiemtra() }}
                    >
                        Kiểm tra
                    </button>
                    <div className='w-20'>
                        <CircularProgressbar value={point} text={`${point}%`} />

                    </div>
                    <div className='flex flex-col items-start h-56'>
                        {loiKhuyen.length > 0 && loiKhuyen.map((value, index) => (
                            <div key={index}>👉 {value}</div>
                        ))}
                    </div>





                </div>
            </div>
        </div>
    )
}
export default TinhTHPT