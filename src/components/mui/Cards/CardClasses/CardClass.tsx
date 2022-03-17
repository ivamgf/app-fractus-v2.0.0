import React, { useState } from "react"

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Button, Divider, Stack } from '@mui/material'
import { Link, useParams } from "react-router-dom"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import Skeleton from '@mui/material/Skeleton'
import ClassImage from "../../../lib/ClassImage"
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'

import classesControler from '../../../../controlers/classesControler'
import questionsControler from '../../../../controlers/questionsControler'

export default function CardClass() {
  const countInit = 1
  const [ count, setCount] = useState(countInit)
  const params = useParams()
  const id: any = params.id
  const classId = parseInt(id, 10)
  const list = classesControler().list
  const questionsList = questionsControler().questionsList
  console.log('questions list:', questionsList)

  const classesList = list?.map((item: any ) => {
    return {
      scene: item.scene,
      class: item.class,
      description: item.description,
      content: item.content,
      image: item.image
    }
  }
)

console.log('id:', id)
console.log("Aulas", classesList)
const classList = classesList?.filter((i: any) => i.class === classId)
console.log("Aula", classList)

  const sizeList = classList?.length
  console.log("size:", sizeList)

  const handleNext = (event: any) => {
    event.preventDefault()
    setCount(count + 1)
    console.log('count inc:',count)
  }

  const handlePrev = (event: any) => {
    event.preventDefault()
    setCount((count > 1) ? (count - 1) : count)
    console.log('count dec:', count)
  }

  const sceneList = classList?.filter((i: any) => (i.scene === count) && (i.scene <= sizeList))
  console.log(sceneList)

  const questions = questionsList?.filter((i: any) => (i.class === classId))
  console.log('questions:',questions)

  return (
    <>
      <Card sx={{minWidth: 275, margin: '1em 1em'}}>

        <Card>
          <CardContent style={{ minHeight: '2em' }}>

            {
              (sceneList?.map((i: any) => i.content)) ? (
                <>
                <Typography variant="body2" style={{ textAlign: 'center', marginBottom: '1em' }}>
                  {sceneList?.map((i: any) => i.content)}
                </Typography>
                </>
                 ) : (
                  <>
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                  </>
                )


            }

          </CardContent>
        </Card>

        <CardContent style={{ minHeight: '12em', backgroundColor: '#F18620' }}>
          {(questions?.find((i: any) => (i.scene === count))) ?
          (
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Questão</FormLabel>
              <RadioGroup
                aria-labelledby="radio-buttons-group-label"
                name="radio-buttons-group"
              >
                <FormControlLabel value={questions?.map((i: any) => (i.option1))} control={<Radio />} label={questions?.map((i: any) => (i.option1))} />
                <FormControlLabel value={questions?.map((i: any) => (i.option2))} control={<Radio />} label={questions?.map((i: any) => (i.option2))} />
                <FormControlLabel value={questions?.map((i: any) => (i.option3))} control={<Radio />} label={questions?.map((i: any) => (i.option3))} />
                <FormControlLabel value={questions?.map((i: any) => (i.option4))} control={<Radio />} label={questions?.map((i: any) => (i.option4))} />
              </RadioGroup>
            </FormControl>
          ) : (
            <p></p>
          )}

          {
            (sceneList?.map((i: any) => i.image)) ? (
              <div style={{ textAlign: 'center', marginBottom: '1em', marginTop: '2em' }}>
                <ClassImage src={`${sceneList?.map((i: any) => i.image)}`} alt={`${sceneList?.map((i: any) => i.description)}`} width="170em" />
              </div>
              ) : (
                <>
                  <Skeleton variant="text" />
                  <Skeleton variant="rectangular" width={265} height={118} />
                </>
              )
          }
        </CardContent>

        <Divider />

          { (sizeList) ? (
            <Stack direction='row' spacing={3}>
            {
              (count === 1 ) ?
              <Link to={`/views/classes/sumary/intro/${id}`} style={{textDecoration: 'none', margin: '0.5em', marginBottom: '0.5em'}}>
                <Button variant="contained" style={{backgroundColor: '#249DD9'}}>
                  <ArrowBackIosNewIcon sx={{color: '#FFF', marginLeft: '-0.5em'}} /> Voltar
                </Button>
              </Link> :
              <div style={{textDecoration: 'none', margin: '0.5em', marginBottom: '0.5em'}}>
                <Button variant="contained" style={{backgroundColor: '#249DD9'}} onClick={handlePrev}>
                  <ArrowBackIosNewIcon sx={{color: '#FFF', marginLeft: '-0.5em'}} /> Voltar
                </Button>
              </div>

            }

            {
              (count < sizeList) ?
              <div style={
                {
                  textDecoration: 'none',
                  marginLeft: 'auto',
                  marginRight: '0.5em',
                  marginTop: '0.5em'
                }
              }>
                <Button variant="contained" style={{backgroundColor: '#249DD9'}} onClick={handleNext}>
                  Próxima <ArrowForwardIosIcon sx={{color: '#FFF', marginRight: '-0.5em'}} />
                </Button>
              </div>
               :
               <div style={
                {
                  textDecoration: 'none',
                  marginLeft: 'auto',
                  marginRight: '0.5em',
                  marginTop: '0.5em'
                }
              }>
                <Link to={'/views/classes'} style={{textDecoration: 'none'}}>
                  <Button variant="contained" style={{backgroundColor: '#249DD9'}}>
                    Próxima <ArrowForwardIosIcon sx={{color: '#FFF', marginRight: '-0.5em'}} />
                  </Button>
                </Link>
              </div>
            }

          </Stack>
          ) : (
              <Stack>
                <Skeleton variant="text" />
              </Stack>
            )
          }

      </Card>
    </>
  );
}
