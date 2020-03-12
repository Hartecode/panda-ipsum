import * as React from 'react'
import styleCss from './ipusmUpdateForm.css'

type Props = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  count: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const IpsumUpdateForm: React.FunctionComponent<Props> = ({ onSubmit, count, onChange }) => (
  <form className="root" onSubmit={onSubmit}>
    <label>
      <span>Select the number of paragraphs:</span>
      <input
      id="count-ipsum"
      type="number"
      name="count"
      value={count}
      onChange={onChange}
      min="1" max="99"/>
    </label>
    <button type="submit">Generate</button>
    <style jsx>{styleCss}</style>
  </form>
)

export default IpsumUpdateForm
