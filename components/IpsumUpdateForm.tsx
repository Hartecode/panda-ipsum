import * as React from 'react'

type Props = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  count: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const IpsumUpdateForm: React.FunctionComponent<Props> = ({ onSubmit, count, onChange }) => (
  <form onSubmit={onSubmit}>
    <label>
      Select the number of paragraphs :
      <input
      id="count-ipsum"
      type="number"
      name="count"
      value={count}
      onChange={onChange}
      min="1" max="99"/>
    </label>
    <input type="submit" value="Submit" />
  </form>
)

export default IpsumUpdateForm
