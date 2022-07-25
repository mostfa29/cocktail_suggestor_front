//dot and hide characters after certain length


export default function dotExtraContent(paragraph,limit=30) {
   return  paragraph.length > limit ? (paragraph.substring(0,limit)+'...' ): paragraph
}