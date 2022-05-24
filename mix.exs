defmodule Hello.Mixfile do
  use Mix.Project

  def project, do: [
    app: :hello,
    version: "0.1.0",
    elixir: ">= 1.3.0",
    compilers: [:reaxt_webpack] ++ Mix.compilers,
    build_embedded: Mix.env == :prod,
    start_permanent: Mix.env == :prod,
    deps: deps()
  ]

  def application, do: [
    mod: { Hello.App, [] },
    extra_applications: [:logger]
  ]

  defp deps, do: [
    {:plug_cowboy, "~> 2.5"},
    {:reaxt, "~> 4.0"},
  ]
end
