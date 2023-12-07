import { useEffect, useState } from 'react'


export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null
    });


    const getFetch = async () => {
        setState({
            ...state,
            isLoading: true
        })


        const resp = await fetch(url);
        const json = await resp.json();

        setState({
            data: json,
            isLoading: false,
            hasError: false
        })
    }

    useEffect(() => {
        getFetch()

    }, [url])

  return {
    ...state
  }

}
