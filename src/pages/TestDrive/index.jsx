import Input from "../../components/Input"
import PrimaryButton from "../../components/PrimaryButton"

const TestDrive = () => {
  return (
    <div className="container">
      <h2>Test Drive</h2>
      <Input label="F.I.O" placeholder="F.I.O" />
      <Input label="Address" placeholder="Address" />
      <Input label="Номер телефона" placeholder="Номер телефона" />
      <Input label="Комментарии" placeholder="Комментарии" />
      <PrimaryButton
        title="Отправить"
        style={{ marginTop: "8px", fontWeight: 300 }}
      />
    </div>
  )
}

export default TestDrive
