    const triangle = {
                        nodes: [{id: 'a'}, {id: 'b'}, {id: 'c'}],
                        edges: [
                                {source: 'a', target: 'b'},
                                {source: 'b', target: 'c'},
                                {source: 'c', target: 'a'}
                                ]
                    };
    const cube = {
                    nodes: [{id: 'a'}, {id: 'b'}, {id: 'c'}, {id: 'd'}, {id: 'e'}, {id: 'f'}, {id: 'g'}, {id: 'h'}],
                    edges: [
                            {source: 'e', target: 'h'},
                            {source: 'e', target: 'f'},
                            {source: 'b', target: 'f'},
                            {source: 'g', target: 'f'},
                            {source: 'h', target: 'g'},
                            {source: 'c', target: 'g'},
                            {source: 'b', target: 'c'},
                            {source: 'a', target: 'b'},
                            {source: 'a', target: 'e'},
                            {source: 'a', target: 'd'},
                            {source: 'd', target: 'c'},
                            {source: 'h', target: 'd'}
                            ]
                }
    const hubAndSpokes = {
                    nodes: [{id: 'a'}, {id: 'b'}, {id: 'c'}, {id: 'd'}, {id: 'e'}, {id: 'f'}, {id: 'g'}, {id: 'h'}, {id: 'a1'}, {id: 'b1'}, {id: 'c1'}, {id: 'd1'}, {id: 'e1'}, {id: 'f1'}, {id: 'g1'}, {id: 'h1'}],
                    edges: [
                            {source: 'a', target: 'b'},
                            {source: 'a', target: 'c'},
                            {source: 'a', target: 'd'},
                            {source: 'a', target: 'e'},
                            {source: 'a', target: 'f'},
                            {source: 'a', target: 'g'},
                            {source: 'a', target: 'h'},
                            {source: 'a1', target: 'b1'},
                            {source: 'a1', target: 'c1'},
                            {source: 'a1', target: 'd1'},
                            {source: 'a1', target: 'e1'},
                            {source: 'a1', target: 'f1'},
                            {source: 'a1', target: 'g1'},
                            {source: 'a1', target: 'h1'},
                            {source: 'a', target: 'a1'}
                            ]
    }
    const hubAndSpokes2 = {
                    nodes: [{id: 'a'}, {id: 'b'}, {id: 'c'}, {id: 'd'}, {id: 'e'}, {id: 'f'}, {id: 'g'}, {id: 'h'}, {id: 'a1'}, {id: 'b1'}, {id: 'c1'}, {id: 'd1'}, {id: 'e1'}, {id: 'f1'}, {id: 'g1'}, {id: 'h1'}, {id: 'a2'}, {id: 'b2'}, {id: 'c2'}, {id: 'd2'}, {id: 'e2'}, {id: 'f2'}, {id: 'g2'}, {id: 'h2'}, {id: 'a3'}, {id: 'b3'}, {id: 'c3'}, {id: 'd3'}, {id: 'e3'}, {id: 'f3'}, {id: 'g3'}, {id: 'h3'}
                    ],
                    edges: [
                            {source: 'a', target: 'b'},
                            {source: 'a', target: 'c'},
                            {source: 'a', target: 'd'},
                            {source: 'a', target: 'e'},
                            {source: 'a', target: 'f'},
                            {source: 'a', target: 'g'},
                            {source: 'a', target: 'h'},
                            {source: 'a1', target: 'b1'},
                            {source: 'a1', target: 'c1'},
                            {source: 'a1', target: 'd1'},
                            {source: 'a1', target: 'e1'},
                            {source: 'a1', target: 'f1'},
                            {source: 'a1', target: 'g1'},
                            {source: 'a1', target: 'h1'},
                            {source: 'a', target: 'a1'},
                            {source: 'b1', target: 'b2'},
                            {source: 'b1', target: 'c2'},
                            {source: 'b1', target: 'd2'},
                            {source: 'b1', target: 'e2'},
                            {source: 'b1', target: 'f2'},
                            {source: 'b1', target: 'g2'},
                            {source: 'b1', target: 'h2'},
                            {source: 'b3', target: 'b2'},
                            {source: 'c3', target: 'c2'},
                            {source: 'd3', target: 'd2'},
                            {source: 'e3', target: 'e2'},
                            {source: 'f3', target: 'f2'},
                            {source: 'g3', target: 'g2'},
                            {source: 'h3', target: 'h2'},
                            {source: 'h3', target: 'a3'},
                            {source: 'h3', target: 'a2'}
                            ]
    }