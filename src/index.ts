import { Reactotron } from "reactotron-core-client"
import { SagaMonitor } from "redux-saga";

import createSagaMonitor, { PluginConfig } from "./sagaMonitor"

export default (pluginConfig: PluginConfig) => (reactotron: Reactotron) => ({
  features: {
    createSagaMonitor: () => createSagaMonitor(reactotron, pluginConfig),
  },
})

declare module "reactotron-core-client" {
  // eslint-disable-next-line import/export
  export interface Reactotron {
    createSagaMonitor?: () => SagaMonitor
  }
}
