export const landingPageQA: LandingPageQA[] = [
  {
    question: 'What is Panda Ipsum?',
    answer: 'A placeholder text for Panda lovers. Great for any project where you need visual mockups and/or to previewing layouts.'
  }, 
  {
    question: 'Why use Panda Ipsum?',
    answer: `Because Pandas are awesome. Enough said!`
  },
  {
    question: 'How it works?',
    answer: "Just select the amount of paragraphs you want and click generate. Sorry we couldn't make it much easier the that"
  }
]

export interface LandingPageQA {
  question: string;
  answer: string;
}