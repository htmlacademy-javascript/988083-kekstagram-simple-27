const SIMILIAR_POSTS_COUNT = 25;
const POST_DESCRIPTIONS = [
  'Далеко-далеко за, словесными горами в стране гласных и согласных живут рыбные тексты. Его если путь родного вдали переписали но своих реторический снова, текста языком рыбного журчит языкового.',
  'Которой рукопись то букв скатился всеми текстов пояс свой, заголовок она. Букв залетают текстами переулка моей большого курсивных не последний запятых переписали встретил снова океана всемогущая даль коварных.',
  'Продолжил необходимыми ему текстами живет запятой текста инициал сбить. Толку, лучше скатился. Щеке до образ страна бросил строчка вершину реторический!',
  'Его подзаголовок даль журчит реторический. Свое текстов путь большой пор над повстречался вершину, там решила! Гор все своего, рот сбить они образ.',
  'Даль ручеек коварный точках реторический! Возвращайся домах решила имеет дал языком дорогу, не последний сих! Собрал до все что заголовок, строчка ведущими злых рукописи о, ручеек семантика, составитель коварных это?',
  'Послушавшись, которой бросил она продолжил заголовок которое текстов использовало? Жаренные взобравшись продолжил точках необходимыми строчка, подпоясал,  своих сих щеке путь! Речью однажды грамматики запятой!'
];
const uniqueIDs = createUniqValues( SIMILIAR_POSTS_COUNT );
const uniqueFileNames = createUniqValues( SIMILIAR_POSTS_COUNT );

function getRandomPositiveNumber( min, max ) {
  if ( min < 0 || max < 0 ) {
    return NaN;
  }
  const lower = Math.ceil( Math.min( min, max ) );
  const upper = Math.floor( Math.max( min, max ) );

  return Math.floor( Math.random() * ( upper - lower + 1 ) + lower );
}

function getRandomArrayElement( elements ) {
  return elements[ getRandomPositiveNumber( 0, elements.length - 1 ) ];
}

function isLengthOverflow( str, maxLength ) {
  return str.length <= maxLength;
}

function createUniqValues( count ) {
  const uniqueValues = new Set();
  while ( uniqueValues.size < count ) {
    uniqueValues.add( getRandomPositiveNumber( 1, count ) );
  }
  return [ ...uniqueValues ];
}

function createPost( i ) {
  return {
    id: uniqueIDs[ i ],
    url: `photos/${uniqueFileNames[ i ]}.jpg`,
    description: getRandomArrayElement( POST_DESCRIPTIONS ),
    likes: getRandomPositiveNumber( 15, 200 ),
    comments: getRandomPositiveNumber( 0, 200 ),
  };
}

function createRandomPosts( count ) {
  const posts = [];
  for ( let i = 0; i < count; i++ ) {
    posts.push( createPost( i ) );
  }
  return posts;
}

createRandomPosts( SIMILIAR_POSTS_COUNT );
isLengthOverflow( 'Hello, World', 12 );
