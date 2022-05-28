const blogsData = [
    {
        id: 1,
        date: "June 50th, 2525",
        time: "2:65PM",
        title: "Blog Test No. 1 TITLE",
        image: "https://www.dropbox.com/s/ib8gjbkfc48ph76/Css.png?raw=1",
        content: <div>MESSAGE BODY lives here</div>
    },

    {
        id: 2,
        date: "March 31st, 1999",
        time: "4400 Hours",
        title: "No. 2, Test Blog, TiTlE",
        image: "https://www.dropbox.com/s/hgm59uqck7f1mqz/Reactshell.png?raw=1",
        content: <div>abdefg<h1>kjfgpwjfp;lwfr</h1>hijklmnopqrstuvwxyz</div>
    },

    {
        id: 3,
        date: "00-00-0000",
        time: "00:00XX",
        title: "ASDFJK LZXCVBNM QWERTYU IOP",
        image: "https://www.dropbox.com/s/2qdiu0281n5pt0t/Redux.png?raw=1",
        content: <div>this is a test <h1> this is <hr /> another test </h1> LLKAJOIER OINFEWOIJFJ OKJVWEOIETWOKJ OINWFOIJEFW  OJEWFWOINF DFSKLNF  FDLKNFLKj FLKNSDFLknF FKLJNFSDLkjFSD FOKJFDlkFSDkljFSD jfsdlkjfsdljkfsljfsljkfljfsljkfs LKJDSFLKJoijF SFKLNk sflkjlfjsflkj lskjlsfjsfiewuriwuoksjoisjgflsjlsfjl LKnfdlknflkjsdlkjsflkjsflkjsflkjvknsdvlk lkjfslkjfslj sfl flkjslfkjlkjfs l  fwlkjfojwf oijlskjfg amn osij ;slakheogfhegl;heg ;ljhagl;kjhdfgkjhg jahg ;kgh h jhgajghksdjghuiwhytoiwhkjng</div>
        
    },

    {
        id: 4,
        date: "00-00-0000",
        time: "00:00XX",
        title: <div>Flatiron Graduation<br />&<br />Pigs Fly</div>,
        image: "https://www.dropbox.com/s/u0a5lxj96oue7fa/IMG_1728.jpg?raw=1",
        content: <div>
            February 15th, 2022 arrives and I never smiled more. Getting the news of graduation was the most important moment of my life. 
            </div>
        
    },
    {
        id: 5,
        date: "00-00-0000",
        time: "00:00XX",
        title: <div>Flatiron Graduation<br />&<br />Pigs Fly</div>,
        image: "https://www.dropbox.com/s/hgm59uqck7f1mqz/Reactshell.png?raw=1",
        content: <div>
            February 15th, 2022 arrives and I never smiled more. Getting the news of graduation was the most important moment of my life. 
            </div>
        
    },
    {
        id: 6,
        date: "00-00-0000",
        time: "00:00XX",
        title: <div>THIS THAT These Those Noun Adverb Verb</div>,
        image: "https://www.dropbox.com/s/u0a5lxj96oue7fa/IMG_1728.jpg?raw=1",
        content: <div>
            February 15th, 2022 arrives and I never smiled more. Getting the news of graduation was the most important moment of my life. 
            </div>
        
    },
    {
        id: 7,
        date: "00-00-0000",
        time: "00:00XX",
        title: <div>HOOPLAH HOOOPLAY</div>,
        image: "https://www.dropbox.com/s/u0a5lxj96oue7fa/IMG_1728.jpg?raw=1",
        content: <div>
            February 15th, 2022 arrives and I never smiled more. Getting the news of graduation was the most important moment of my life. 
            </div>
        
    },

    {
        id: 8,
        date: "4.29.2022",
        time: "00:00AM",
        title: <div>Code Challenge Nostalgia with Regex</div>,
        image: "https://www.dropbox.com/s/u0a5lxj96oue7fa/IMG_1728.jpg?raw=1",
        content: `While I was working through the Flatiron boot-camp, I got quite familiar with the feeling of being overwhelmed when facing something for the first time. Code can be intimidating, for me, often terrifying, but genuinely always rewarding to embrace. 

        Trying to stay up-to-date in my brain while venturing into the world of software engineering as a professional, oftentimes shows me how memory can be a tricky thing. All these concepts and challenging fundamentals can slip through the sieve of our minds because we're faced with so many technologies, so many rule-sets, so many patterns of implementation, on such a regular basis. We have to get comfortable with the idea that it's okay if we forget, as long as we know where to go when we sincerely do need the answers.
        
        ::whispers:: Plus, I heard this *dark* rumor, that even experienced coders forget things, including the basics, and refer to search engines all the time. I HEARD THIS THROUGH THE GRAPEVINE - it's a secret! Shhh!
        
        Reading and research is a lot of fun for me because I enjoy dissecting things and categorizing, making analogous contrasts and comparisons, turning simple things into stories. It's just how I function as a human. Exploration and documentation is my home, regardless of any trepidation. I have a need to understand *things* so documentation becomes my ally and steady at my side.
        
        
        Recently, I ran through some code challenges on codewars.com that really took me back in time to a place where people groan in agony and yet I can shine with a smile; I MADE NOTES to help guide my mind and fall in love with it..
        
        # REGEX
        *:cue screaming:*
        
        ---
        ## THE CODEWARS KATA
        **DESCRIPTION :**
        
        Return the number (count) of vowels in the given string.
        
        We will consider a, e, i, o, u as vowels for this Kata (but not y).
        
        The input string will only consist of lower case letters and/or spaces.`
        

    }
]
export default blogsData;


//^ REACT-MARKDOWN
//^     DOES NOT RENDER MULTILINE MARKDOWN :C (what am i doin' wrong?)
//^     '\n' <--- linebreak
//^     CONSIDER USING REGEX TO TAKE STRING FROM GITHUB PAGE, PARSE FOR LINEBREAKS, INSERT '\n'
//^     CONSIDER SCRAPING > STRETCH GOAL - SCRAPE GH PAGE FOR CONTENT - FETCH REQUEST
//^     https://raw.githubusercontent.com/KimberlyRosaly/paper/main/example.md <---renders raw text | easy to replace URL section






