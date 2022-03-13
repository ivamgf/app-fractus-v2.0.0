import { any } from "prop-types";
import React from "react";
import { useParams } from "react-router";
import { classesService } from '../api/ClassService'

export default function classesControler() {
  const params = useParams()
  const id = params.id
  console.log(id)
  const resp = classesService('classes')
  const list = resp.classes.data
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

  console.log("Aulas", classesList)
  const classList = classesList?.filter((i: any) => i.class === 1)

  return {
    classList
  }
}
