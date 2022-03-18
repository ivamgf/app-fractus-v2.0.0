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
  const [valid, setValid] = useState(false)
  const fluxInit = 0
  const [flux, setFlux] = useState(fluxInit)
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
    valid === true ? setFlux(1) : setFlux(0)
    console.log('count inc:',count)
    console.log('flux next:', flux)
    console.log('valid next:', valid)
  }

  const handleFlux1 = (event: any) => {
    event.preventDefault()
    const finalScene = classList.slice(-1).map((i: any) => { return {scene: i.scene}})
    console.log('flux1:', finalScene.map((i: any) => i)[0].scene)
    setCount(finalScene.map((i: any) => i)[0].scene)
  }

  const handleFlux2 = (event: any) => {
    event.preventDefault()
    const finalScene = classList.slice(-2, 1)
    console.log(finalScene)
  }

  const handlePrev = (event: any) => {
    event.preventDefault()
    flux === 1 ?
    (setCount(questions.map((i: any) => i.scene).slice(0,1)[0]),
    setFlux(0)) :
    setCount((count > 1) ? (count - 1) : count)
    console.log('count dec:', count)
  }

  const handlePrevFlux1 = (event: any) => {
    event.preventDefault()
    const prevCount = (questions.map((i: any) => i.scene).slice(0,1)[0]) + 1
    console.log('prevCount:', prevCount)
    setCount(prevCount)
    console.log('count dec:', count)
  }

  const handleRadio = (event: any) => {
    event.preventDefault()
    const valueRadio = event.target.value
    console.log("radio:", valueRadio)
    const answer = questions?.reduce((ac: any, i: any) => {(i.answer); return ac = i.answer}, [])
    console.log('resp:', answer)
    valueRadio === answer ? setValid(true) : setValid(false)
    console.log('flux:', flux)
    console.log('valid:', valid)
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
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value={questions?.reduce((ac: any, i: any) => {(i.option1); return ac = i.option1}, [])}
                  control={<Radio />}
                  label={questions?.reduce((ac: any, i: any) => {(i.option1); return ac = i.option1}, [])}
                  onClick={handleRadio}
                />
                <FormControlLabel
                  value={questions?.reduce((ac: any, i: any) => {(i.option2); return ac = i.option2}, [])}
                  control={<Radio />}
                  label={questions?.reduce((ac: any, i: any) => {(i.option2); return ac = i.option2}, [])}
                  onClick={handleRadio}
                />
                <FormControlLabel
                  value={questions?.reduce((ac: any, i: any) => {(i.option3); return ac = i.option3}, [])}
                  control={<Radio />}
                  label={questions?.reduce((ac: any, i: any) => {(i.option3); return ac = i.option3}, [])}
                  onClick={handleRadio}
                />
                <FormControlLabel
                  value={questions?.reduce((ac: any, i: any) => {(i.option4); return ac = i.option4}, [])}
                  control={<Radio />}
                  label={questions?.reduce((ac: any, i: any) => {(i.option4); return ac = i.option4}, [])}
                  onClick={handleRadio}
                />
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
                  <Skeleton variant="rectangular" height={118} />
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

              (flux === 1) && (count === classList.slice(-1).map((i: any) => { return {scene: i.scene}}).map((i: any) => i)[0].scene) ?
                <div style={{textDecoration: 'none', margin: '0.5em', marginBottom: '0.5em'}}>
                  <Button variant="contained" style={{backgroundColor: '#249DD9'}} onClick={handlePrevFlux1}>
                    <ArrowBackIosNewIcon sx={{color: '#FFF', marginLeft: '-0.5em'}} /> Voltar
                  </Button>
                </div> :
              (
                <div style={{textDecoration: 'none', margin: '0.5em', marginBottom: '0.5em'}}>
                  <Button variant="contained" style={{backgroundColor: '#249DD9'}} onClick={handlePrev}>
                    <ArrowBackIosNewIcon sx={{color: '#FFF', marginLeft: '-0.5em'}} /> Voltar
                  </Button>
                </div>
              )


            }

            {
              (count < sizeList) ?

              ( (flux === 0) ? (
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
                ) : (
                  (
                    (flux === 1) ? (
                      <div style={
                      {
                        textDecoration: 'none',
                        marginLeft: 'auto',
                        marginRight: '0.5em',
                        marginTop: '0.5em'
                      }
                      }>
                        <Button variant="contained" style={{backgroundColor: '#249DD9'}} onClick={handleFlux1}>
                          Próxima <ArrowForwardIosIcon sx={{color: '#FFF', marginRight: '-0.5em'}} />
                        </Button>
                      </div>
                    ) : (
                      <div style={
                      {
                        textDecoration: 'none',
                        marginLeft: 'auto',
                        marginRight: '0.5em',
                        marginTop: '0.5em'
                      }
                      }>
                        <Button variant="contained" style={{backgroundColor: '#249DD9'}} onClick={handleFlux2}>
                          Próxima <ArrowForwardIosIcon sx={{color: '#FFF', marginRight: '-0.5em'}} />
                        </Button>
                      </div>
                    )
                  )
                )
              )


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
