import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Image from '../../../lib/Image'

/*eslint-disable */
export default function AccordionText(props: any): JSX.Element {
    const contentText1 = props.text1
    const contentText2 = props.text2
    const content1 = contentText1.content1
    const content1Item1 = content1.item1
    const content1Item2 = content1.item2
    const content1Item3 = content1.item3
    const content1Item4 = content1.item4

    const content2 = contentText2.content2
    const content2Item1 = content2.item1
    const content2SubItem1 = content2.item1.subItem1
    const content2Item2 = content2.item2
    const content2Item3 = content2.item3
    const content2Item4 = content2.item4
    const pathImg1 = 'fracao1.png'
    const pathImg2 = 'fracao2.png'
    const pathImg3 = 'fracao3.png'
    const pathImg4 = 'fracao4.png'
    const pathImg5 = 'fracao5.png'
    const pathImg6 = 'fracao6.png'
    const pathImg7 = 'fracao7.png'
    const pathImg8 = 'fracao8.png'
    const pathImg9 = 'fracao9.png'
    const pathImg10 = 'fracao10.png'
    const pathImg11 = 'fracao11.png'
    const pathImg12 = 'fracao12.png'
    const pathImg13 = 'fracao13.png'
    const pathImg14 = 'fracao14.png'
    const pathImg15 = 'fracao15.png'
    const pathImg16 = 'fracao16.png'
    const pathImg17 = 'fracao17'
    const pathImg18 = 'fracao18.png'
    const pathImg19 = 'fracao19.png'
    const pathImg20 = 'fracao20.png'
    const altText = 'Imagem de frações'
    const width = '60%'

    return (
        <>
            <div>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        style={{ backgroundColor: '#249DD9', color: '#fff' }}
                    >
                        <Typography>{contentText1.title1}</Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{backgroundColor: '#4bc4ff'}}>
                        <Typography variant="body2" style={{ textAlign: 'center', marginBottom: '1em' }}>{content1.definition}</Typography>
                        <Typography variant="body2" style={{ textAlign: 'center', marginBottom: '1em' }}>{content1.example1}</Typography>

                        <Typography variant="body2" style={{ textAlign: 'center', marginBottom: '1em', fontWeight: 'bold' }}>{content1.subTitle1}</Typography>
                        <Typography variant="body2" style={{ textAlign: 'center', marginBottom: '1em' }}>{content1.description1}</Typography>
                        <Image src={pathImg1} alt={altText} width={width} />

                        <Typography variant="body2" style={{ textAlign: 'center', marginBottom: '1em', fontWeight: 'bold' }}>{content1Item1.titleItem1}</Typography>
                        <Typography variant="body2" style={{ textAlign: 'center', marginBottom: '1em' }}>{content1Item1.textItem1}</Typography>
                        <Image src={pathImg2} alt={altText} width={width} />

                        <Typography variant="body2" style={{ textAlign: 'center', marginBottom: '1em', fontWeight: 'bold' }}>{content1Item2.titleItem2}</Typography>
                        <Typography variant="body2" style={{ textAlign: 'center', marginBottom: '1em' }}>{content1Item2.textItem2}</Typography>
                        <Image src={pathImg3} alt={altText} width={width} />

                        <Typography variant="body2" style={{ textAlign: 'center', marginBottom: '1em', fontWeight: 'bold' }}>{content1Item3.titleItem3}</Typography>

                        <Typography variant="body2" style={{ textAlign: 'center', marginBottom: '1em' }}>{content1Item3.textItem3}</Typography>
                        <Image src={pathImg4} alt={altText} width='30%' />

                        <Typography variant="body2" style={{ textAlign: 'center', marginBottom: '1em', fontWeight: 'bold' }}>{content1Item4.titleItem4}</Typography>

                        <Typography variant="body2" style={{ textAlign: 'center', marginBottom: '1em' }}>{content1Item4.textItem4}</Typography>
                        <Image src={pathImg5} alt={altText} width='20%' />

                        <Typography variant="body2" style={{ textAlign: 'center', marginBottom: '1em' }}>
                          <a href="http://app-fractus.orkneytech.com.br/texts/texto1.pdf" style={{textDecoration: 'none', color: '#fff'}}>Baixar o Texto 1</a>
                        </Typography>

                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        style={{ backgroundColor: '#249DD9', color: '#fff' }}
                    >
                        <Typography>{contentText2.title2}</Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{backgroundColor: '#4bc4ff'}}>
                    <Typography variant="body2" style={{ textAlign: 'center', marginBottom: '1em' }}>{content2.definition}</Typography>
                        <Typography variant="body2" style={{ textAlign: 'center', marginBottom: '1em' }}>{content2.example2}</Typography>

                        <Typography variant="body2" style={{ textAlign: 'center', marginBottom: '1em' }}>{content2.subTitle2}</Typography>
                        <Typography variant="body2" style={{ textAlign: 'center', marginBottom: '1em' }}>{content2.description1}</Typography>
                        <Typography variant="body2" style={{ textAlign: 'center', marginBottom: '1em', fontWeight: 'bold' }}>{content2Item1.titleItem1}</Typography>
                        <Typography variant="body2" style={{ textAlign: 'center', marginBottom: '1em' }}>{content2Item1.textItem1}</Typography>
                        <Image src={pathImg6} alt={altText} width={width} />
                        <Typography variant="body2" style={{ textAlign: 'center', marginBottom: '1em' }}>{content2SubItem1.subItemText1}</Typography>
                        <Image src={pathImg7} alt={altText} width={width} />
                        <Typography variant="body2" style={{ textAlign: 'center', marginBottom: '1em' }}>{content2SubItem1.subItemText2}</Typography>
                        <Image src={pathImg8} alt={altText} width={width} />

                        <Typography variant="body2" style={{ textAlign: 'center', marginTop: '2em' }}>
                          <Image src={pathImg9} alt={altText} width={width} />
                        </Typography>

                        <Typography variant="body2" style={{ textAlign: 'center', marginTop: '2em' }}>
                          <Image src={pathImg10} alt={altText} width={width} />
                        </Typography>

                        <Typography variant="body2" style={{ textAlign: 'center', marginTop: '2em' }}>
                          <Image src={pathImg11} alt={altText} width={width} />
                        </Typography>

                        <Typography variant="body2" style={{ textAlign: 'center', marginTop: '2em' }}>
                          <Image src={pathImg12} alt={altText} width={width} />
                        </Typography>

                        <Typography variant="body2" style={{ textAlign: 'center', marginTop: '2em' }}>
                          <Image src={pathImg13} alt={altText} width={width} />
                        </Typography>

                        <Typography variant="body2" style={{ textAlign: 'center', marginTop: '2em' }}>
                          <Image src={pathImg14} alt={altText} width={width} />
                        </Typography>

                        <Typography variant="body2" style={{ textAlign: 'center', marginBottom: '2em', marginTop: '2em' }}>
                          <Image src={pathImg15} alt={altText} width='20%' />
                        </Typography>

                        <Typography variant="body2" style={{ textAlign: 'center', marginBottom: '1em' }}>{content2SubItem1.subItemText3}</Typography>
                        <Image src={pathImg16} alt={altText} width={width} />
                        <Typography variant="body2" style={{ textAlign: 'center', marginBottom: '1em', fontWeight: 'bold' }}>{content2Item2.titleItem2}</Typography>
                        <Typography variant="body2" style={{ textAlign: 'center', marginBottom: '1em' }}>{content2Item2.textItem2}</Typography>
                        <Image src={pathImg17} alt={altText} width={width} />
                        <Typography variant="body2" style={{ textAlign: 'center', marginBottom: '1em' }}>{content2SubItem1.subItemText4}</Typography>
                        <Typography variant="body2" style={{ textAlign: 'center', marginBottom: '2em', marginTop: '2em' }}>
                          <Image src={pathImg18} alt={altText} width={width} />
                        </Typography>
                        <Typography variant="body2" style={{ textAlign: 'center', marginBottom: '1em', fontWeight: 'bold' }}>{content2Item3.titleItem3}</Typography>

                        <Typography variant="body2" style={{ textAlign: 'center', marginBottom: '1em' }}>{content2Item3.textItem3}</Typography>
                        <Image src={pathImg19} alt={altText} width={width} />
                        <Typography variant="body2" style={{ textAlign: 'center', marginBottom: '1em', fontWeight: 'bold' }}>{content2Item4.titleItem4}</Typography>
                        <Typography variant="body2" style={{ textAlign: 'center', marginBottom: '1em' }}>{content2Item4.textItem4}</Typography>
                        <Image src={pathImg20} alt={altText} width={width} />
                    </AccordionDetails>
                </Accordion>

            </div>
        </>
    )
}
/*eslint-disable */
