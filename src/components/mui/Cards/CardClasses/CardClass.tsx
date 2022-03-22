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

/*eslint-disable */
export default function CardClass() {
  const [questionState, setQuestionState] = useState(false)
  const [valid, setValid] = useState(0)
  const fluxInit = 0
  const [flux, setFlux] = useState(fluxInit)
  const countInit = 1
  const [ count, setCount] = useState(countInit)
  const params = useParams()
  const id: any = params.id
  const classId = parseInt(id, 10)
  const list = classesControler().list
  const questionsList = questionsControler().questionsList

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

const classList = classesList?.filter((i: any) => i.class === classId)

  const sizeList = classList?.length

  const handleNext = (event: any) => {
    event.preventDefault()
    valid === 0 ? setCount(count + 1) : valid === 1 ? (setFlux(1), setCount(count + 1)) : (setFlux(2), setCount(count + 2))
  }

  const handleFlux1 = (event: any) => {
    event.preventDefault()
    const finalScene = classList.slice(-1).map((i: any) => { return {scene: i.scene}})
    setCount(finalScene.map((i: any) => i)[0].scene)
  }

  const handleFlux2 = (event: any) => {
    event.preventDefault()
    setCount(count + 1)
    valid === 0 ?
    setFlux(0) : (valid === 1) ?
    (setFlux(1), setCount((questions?.map((i: any) => { return {scene: i.scene}}).map((i: any) => i)[0].scene) + 1)) :
    setFlux(2)
  }

  const handlePrev = (event: any) => {
    event.preventDefault()
    flux === 1 ?
    (setCount(questions.map((i: any) => i.scene).slice(0,1)[0]),
    setFlux(0)) :
    setCount((count > 1) ? (count - 1) : count)
  }

  const handlePrevFlux1 = (event: any) => {
    event.preventDefault()
    const prevCount = (questions.map((i: any) => i.scene).slice(0,1)[0]) + 1
    setCount(prevCount)
  }

  const handlePrevFlux2 = (event: any) => {
    event.preventDefault()
    const prevCount = (questions.map((i: any) => i.scene).slice(0,1)[0])
    setCount(prevCount)
    setFlux(0)
  }

  const handleRadio = (event: any) => {
    event.preventDefault()
    const valueRadio = event.target.value
    const answer = questions?.map((i: any) => (i.answer))[0]
    valueRadio === answer ? setValid(1) : (valueRadio != answer) ? setValid(2) : setValid(0)
    setQuestionState(true)
  }

  const sceneList = classList?.filter((i: any) => (i.scene === count) && (i.scene <= sizeList))

  const questions = questionsList?.filter((i: any) => (i.class === classId))

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
                onChange={handleRadio}
              >
                <FormControlLabel
                  value={questions?.map((i: any) => (i.option1))[0]}
                  control={<Radio />}
                  label={questions?.map((i: any) => (i.option1))[0]}

                />
                <FormControlLabel
                  value={questions?.map((i: any) => (i.option2))[0]}
                  control={<Radio />}
                  label={questions?.map((i: any) => (i.option2))[0]}

                />
                <FormControlLabel
                  value={questions?.map((i: any) => (i.option3))[0]}
                  control={<Radio />}
                  label={questions?.map((i: any) => (i.option3))[0]}

                />
                <FormControlLabel
                  value={questions?.map((i: any) => (i.option4))[0]}
                  control={<Radio />}
                  label={questions?.map((i: any) => (i.option4))[0]}

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

          {
            (sizeList) ? (

              <Stack direction='row' spacing={3}>
              {
                (questions?.find((i: any) => (i.scene === count))) ?
                <div style={{textDecoration: 'none', margin: '0.5em', marginBottom: '0.5em'}}>
                  <Button variant="contained" style={{backgroundColor: '#249DD9'}} disabled>
                    <ArrowBackIosNewIcon sx={{color: 'rgba(0, 0, 0, 0.26)', marginLeft: '-0.5em'}} /> Voltar
                  </Button>
                </div> :
                (count === 1 ) ?
                <Link to={`/views/classes/sumary/intro/${id}`} style={{textDecoration: 'none', margin: '0.5em', marginBottom: '0.5em'}}>
                  <Button variant="contained" style={{backgroundColor: '#249DD9'}}>
                    <ArrowBackIosNewIcon sx={{color: '#FFF', marginLeft: '-0.5em'}} /> Voltar
                  </Button>
                </Link> :

                (flux === 1) && (count === classList?.slice(-1).map((i: any) => { return {scene: i.scene}}).map((i: any) => i)[0].scene) ?
                  <div style={{textDecoration: 'none', margin: '0.5em', marginBottom: '0.5em'}}>
                    <Button variant="contained" style={{backgroundColor: '#249DD9'}} onClick={handlePrevFlux1}>
                      <ArrowBackIosNewIcon sx={{color: '#FFF', marginLeft: '-0.5em'}} /> Voltar
                    </Button>
                  </div> :
                ((flux === 2) && (count === (questions?.map((i: any) => { return {scene: i.scene}}).map((i: any) => i)[0].scene)+2) ?
                  <div style={{textDecoration: 'none', margin: '0.5em', marginBottom: '0.5em'}}>
                    <Button variant="contained" style={{backgroundColor: '#249DD9'}} onClick={handlePrevFlux2}>
                      <ArrowBackIosNewIcon sx={{color: '#FFF', marginLeft: '-0.5em'}} /> Voltar
                    </Button>
                  </div> :
                  <div style={{textDecoration: 'none', margin: '0.5em', marginBottom: '0.5em'}}>
                    <Button variant="contained" style={{backgroundColor: '#249DD9'}} onClick={handlePrev}>
                      <ArrowBackIosNewIcon sx={{color: '#FFF', marginLeft: '-0.5em'}} /> Voltar
                    </Button>
                  </div>
                )

            }

            {
              (questions?.find((i: any) => (i.scene === count))) ?

              (questionState === false) ?
              (flux === 0) ? (

                <div style={
                  {
                    textDecoration: 'none',
                    marginLeft: 'auto',
                    marginRight: '0.5em',
                    marginTop: '0.5em'
                  }
                  }>
                    <Button variant="contained" style={{backgroundColor: '#249DD9'}} onClick={handleNext} disabled>
                      Responder <ArrowForwardIosIcon sx={{color: 'rgba(0, 0, 0, 0.26)', marginRight: '-0.5em'}} />
                    </Button>
                  </div> ) : (
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
                          <Button variant="contained" style={{backgroundColor: '#249DD9'}} onClick={handleFlux1} disabled>
                            Responder <ArrowForwardIosIcon sx={{color: 'rgba(0, 0, 0, 0.26)', marginRight: '-0.5em'}} />
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
                        <Button variant="contained" style={{backgroundColor: '#249DD9'}} onClick={handleFlux2} disabled>
                          Responder <ArrowForwardIosIcon sx={{color: 'rgba(0, 0, 0, 0.26)', marginRight: '-0.5em'}} />
                        </Button>
                      </div>
                    )
                  )
                ) :
              (flux === 0) ? (

                <div style={
                  {
                    textDecoration: 'none',
                    marginLeft: 'auto',
                    marginRight: '0.5em',
                    marginTop: '0.5em'
                  }
                  }>
                    <Button variant="contained" style={{backgroundColor: '#249DD9'}} onClick={handleNext}>
                      Responder <ArrowForwardIosIcon sx={{color: '#FFF', marginRight: '-0.5em'}} />
                    </Button>
                  </div> ) : (
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
                            Responder <ArrowForwardIosIcon sx={{color: '#FFF', marginRight: '-0.5em'}} />
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
                          Responder <ArrowForwardIosIcon sx={{color: '#FFF', marginRight: '-0.5em'}} />
                        </Button>
                      </div>
                    )
                  )
                ) :

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
/*eslint-disable */
