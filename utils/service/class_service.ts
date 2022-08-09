import { type ClassInfoDTO } from '@utils/dtos/class_dtos';
import { axiosClient } from '@utils/axios/common_axios';

type GetClassesProps = {
  pageSize?: string;
  lastClassId?: string;
  gteSessionStartDate?: Date;
};

export async function getClassesAsync(props: GetClassesProps) {
  const { gteSessionStartDate, lastClassId, pageSize } = props;
  const { data } = await axiosClient().get<ClassInfoDTO[]>('http://localhost:5000/posts', {
    params: {
      pageSize: pageSize || '10',
      lastId: lastClassId,
      gteDate: gteSessionStartDate,
    },
  });
  return data;
}
