import { XFlow, XFlowGraph, Clipboard, Control } from "@antv/xflow";

import { ConfigDrawer } from "./config-drawer";
import { Connect } from "./connect";
import { Dnd } from "./dnd/dnd";
import "./index.less";
import { InitShape } from "./node";
import { DAG_EDGE, DAG_CONNECTOR } from "./shape";
import { Toolbar } from "./toolbar";

const App = () => {
  return (
    <XFlow>
      <div className="page">
        <div className="container">
          <div className="left">
            <div className="leftTop">算子组件库</div>
            <Dnd />
          </div>
          <div className="center">
            <div className="toolbar">
              <Toolbar />
            </div>
            <div className="graph">
              <XFlowGraph
                pannable
                connectionOptions={{
                  snap: true,
                  allowBlank: false,
                  allowLoop: false,
                  highlight: true,
                  connectionPoint: "anchor",
                  anchor: "center",
                  connector: DAG_CONNECTOR,
                  validateMagnet({ magnet }) {
                    return magnet.getAttribute("port-group") !== "top";
                  },
                }}
                connectionEdgeOptions={{
                  shape: DAG_EDGE,
                  animated: true,
                  zIndex: -1,
                }}
              />
              <InitShape />
              <Clipboard />
              <Connect />
              <div className="controlTool">
                <Control
                  items={[
                    "zoomOut",
                    "zoomTo",
                    "zoomIn",
                    "zoomToFit",
                    "zoomToOrigin",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
        <ConfigDrawer />
      </div>
    </XFlow>
  );
};

export default App;
