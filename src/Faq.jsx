export default function Faq({ faq, onToggle, isOpen }) {
  const { question, answer } = faq

  return (
    <div className="flex flex-col gap-1.6 pt-1.6">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={onToggle}
      >
        <p className="font-bold text-darkPurple hover:text-[#AD28EB] duration-300 transition-colors">
          {question}
        </p>

        <img
          src={`${isOpen ? "icon-minus.svg" : "icon-plus.svg"}`}
          alt={`${isOpen ? "minus" : "plus"} icon`}
        />
      </div>
      <p className={`${isOpen ? "block" : "hidden"} text-grayishPurple`}>
        {answer}
      </p>
    </div>
  )
}
