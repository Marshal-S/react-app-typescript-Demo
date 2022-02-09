declare namespace API {
  //获取项目列表参数
  type pojectListParams = {
    name?: string
  }

  //创建修改项目参数
  type createProjectParams = {
    name: string,
    description: string,
    project_type: number
  }

  //删除项目
  type deleteProjectParams = {
    object_id: number
  }

  //返回列表类型
  type projectListResponse = {
    /** 标识代码;200表示成功，非200表示出错 */
    code: number;
    /** 返回的数据 */
    data: Required<ProjectData>;
    /** 结果提示信息 */
    message: string;
  }

  //返回项目类型
  type projectResponse = {
    /** 标识代码;200表示成功，非200表示出错 */
    code: number;
    /** 返回的数据 */
    data: Required;
    /** 结果提示信息 */
    message: string;
  }

  //项目信息
  type projectData = {
    object_id: string,
    create_time: string,
    update_time: string,
    project_type: number,
    name: string,
    description: string
  }
}
