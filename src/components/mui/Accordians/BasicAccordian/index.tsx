import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export default function BasicAccordion(props: any): JSX.Element {
    const contentText = props.contentText

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
                        <Typography>{contentText.title1}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{contentText.text1}</Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        style={{ backgroundColor: '#249DD9', color: '#fff' }}
                    >
                        <Typography>{contentText.title2}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{contentText.text2}</Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                        style={{ backgroundColor: '#249DD9', color: '#fff' }}
                    >
                        <Typography>{contentText.title3}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{contentText.text3}</Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                        style={{ backgroundColor: '#249DD9', color: '#fff' }}
                    >
                        <Typography>{contentText.title4}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{contentText.text4}</Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                        style={{ backgroundColor: '#249DD9', color: '#fff' }}
                    >
                        <Typography>{contentText.title5}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{contentText.text5}</Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                        style={{ backgroundColor: '#249DD9', color: '#fff' }}
                    >
                        <Typography>{contentText.title6}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{contentText.text6}</Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                        style={{ backgroundColor: '#249DD9', color: '#fff' }}
                    >
                        <Typography>{contentText.title7}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{contentText.text7}</Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                        style={{ backgroundColor: '#249DD9', color: '#fff' }}
                    >
                        <Typography>{contentText.title8}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{contentText.text8}</Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                        style={{ backgroundColor: '#249DD9', color: '#fff' }}
                    >
                        <Typography>{contentText.title9}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{contentText.text9}</Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </>
    )
}
