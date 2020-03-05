export class IpsumGenerator {
  private _ngrams: Ngram;

  constructor(text: string) {
      this._ngrams = this.setup(text);
  }

  private setup(text: string): Ngram {
      const textArr = text.split(' ');
      return textArr.reduce((acc, cur: string, i: number) => {
          const next: string = textArr[i + 1];
          if (i === textArr.length - 1)  return acc;

          if (!(cur in acc)) {
              acc[cur] = {
                relatedWords: {},
                overAllTotal: 0
              };
          }            

          if(!acc[cur].relatedWords[next]) {
              acc[cur].relatedWords[next] = { 
                per: 0,
                total: 0
              };
          }

          acc[cur].relatedWords[next].total = ++acc[cur].relatedWords[next].total;

          acc[cur].overAllTotal = ++acc[cur].overAllTotal;

          for (let key in acc[cur].relatedWords) {
              acc[cur].relatedWords[key].per = acc[cur].relatedWords[key].total / acc[cur].overAllTotal;
          }
          return acc;
      }, <Ngram>{});
  }

  // returns random number
  private randomItem(arr: string[] | number[]): number {
      return Math.floor(Math.random() * (arr.length));
  }

  // takes in a object returns a string
  private pickNextWord(relatedWords: RelatedWords): string {
      const relatedWordsArray: string[] =  Object.keys(relatedWords);
      const randPick: string = relatedWordsArray[this.randomItem(relatedWordsArray)];
      const randomNumber: number = Math.random();
      if (relatedWords[randPick]['per'] >= randomNumber) {
          return randPick;
      }
      return this.pickNextWord(relatedWords);
  }

  public generateText(firstPar: boolean, num: number): string {
      const keyList: string[] = Object.keys(this._ngrams);
      let currentGram: string = firstPar ? keyList[0] : keyList[this.randomItem(keyList)];
      let result: string = firstPar ? currentGram : currentGram.charAt(0).toUpperCase() + currentGram.slice(1);
  
      for (let i = 0; i < num; i++) {
          let next: string;
          const possibilities: NgramValue = this._ngrams[currentGram];
          if (!possibilities) {
              const newWord: string = keyList[this.randomItem(keyList)];
              next = (currentGram.includes('.')) ? newWord.charAt(0).toUpperCase() + newWord.slice(1) : newWord.toLowerCase();  
          } else {
              next = this.pickNextWord(possibilities.relatedWords);
          }
          result +=  ' ' + next;
          currentGram = next;
      }

      if (!currentGram.includes('.')) {
          if (result.indexOf(',') === result.length - 1) result.replace(',', '');
          result += '.';
      }
  
      return result;
  }

  public generateRichText(numOfParagraph: number): string {
      let ipsum: string = '';
      for (let i=0; i < numOfParagraph; i++) {
          ipsum += `<p>${this.generateText(i === 0, this.paragraphLength())}</p>`;
      }
      return ipsum;
  }

  private paragraphLength(): number {
      const parLength = [50, 75, 100, 125];
      return  parLength[this.randomItem(parLength)];
  }
}


interface Ngram {
    [key:string]: NgramValue;
}

interface NgramValue {
  relatedWords: RelatedWords;
  overAllTotal: number;// total of words which cam after the main word
}

interface RelatedWords {
  [key:string]: {
        per: number; // percentage of times used after the main word
        total: number; // total of times used
    }
}
