import React from "react";
import { classesService } from '../../src/api/ClassService'

export default function classesControler() {
  const resp = classesService('classes')
  const list = resp.classes.data
  const classList = list?.map((item: any) => {
      return {
        scene: item.scene,
        class: item.class,
        description: item.description,
        content: item.content,
        image: item.image
      }
    }
  )

  return {
    list, classList
  }
}
