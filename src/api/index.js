import axios from 'axios';

export async function getLinks() {
  try {
    const { data } = await axios.get('/api/links');
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getTags() {
  try {
    const { data } = await axios.get('/api/tags');
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getLinkTags() {
  try {
    const { data } = await axios.get('/api/link_tags');
    return data;
  } catch (error) {
    throw error;
  }
}

export async function createLinks(name, link, createDate, comment, tags, clickNum) {
  try {
    const { data } = await axios.post('/api/links', {
        name: name,
        link: link,
        createDate: createDate,
        comment: comment,
        tags: tags,
        clickNum: clickNum,
    });
    
    console.log(data)
    return data
  } catch (error) {
    throw error;
  }
}

export async function createTags() {
  try {
    const { data } = await axios.post('/api/tags');
    return data;
  } catch (error) {
    throw error;
  }
}

export async function deleteLink(id) {
  try {
    const { data } = await axios.delete(`/api/${id}`);
    return data
  } catch (error) {
    throw error
  }
}

export async function patchLink(){

}

export async function updateClick(id, newClickNum){
  try {
    console.log(newClickNum)
    const { data } = await axios.patch(`/api/${id}`, {
      clickNum: newClickNum
    });
    console.log(data)
    return data
  } catch (error) {
    throw error
  }
}

export async function getLinksByTag(tagName) {
  try {
    console.log(tagName)
    const { data } = await axios.get(`/api/${tagName}/links`, {
      tagName: tagName
    })
    return data
  } catch (error) {
    throw error
  }
}
